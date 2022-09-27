import { PageTitle } from "../../components/layout/page/title";
import { microcmsClient } from "../../libs/client";
import dayjs from "dayjs";

export default function BlogSinglePage(props) {
  return (
    <div className="pb-20 pt-20 px-5 md:px-40">
      <PageTitle title="blog title" />
      <p>{dayjs(props.publishedAt).format("MMM DD YYYY")}</p>
      <div id="body" dangerouslySetInnerHTML={{ __html: props.body }}></div>
    </div>
  );
}

//slugをパスにする
export const getStaticPaths = async () => {
  const BlogList = await microcmsClient.getList({ endpoint: "blog" });
  const slugs = BlogList.contents.map((content) => `/blog/${content.slug}`);

  return {
    paths: slugs,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const BlogList = await microcmsClient.getList({ endpoint: "blog" });
  const currentSlug = ctx.params.slug;
  const contents = BlogList.contents;
  //contentsから、slugの値がcurrentSlugと等しいオブジェクトを見つけてresultに格納する
  const result = contents.find((v) => v.slug === currentSlug);
  //resultのidをもってくる
  const currentId = result.id;
  //該当のidのブログをもってくる
  const BlogListDetail = await microcmsClient.getListDetail({
    endpoint: "blog",
    contentId: currentId,
  });

  return {
    props: BlogListDetail,
    revalidate: 10,
  };
};
