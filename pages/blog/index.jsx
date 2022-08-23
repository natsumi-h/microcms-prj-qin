import { Blog } from "../../components/blog/blog";
import { PageTitle } from "../../components/layout/page/title";
import { client } from "../../lib/client";


export default function BlogPage(blog) {

  return (
    <div className="pb-20 pt-20 px-5 md:px-40">
      <PageTitle title="Blog" />
      <Blog apiprops={blog} />
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};
