import { Button } from "../layout/top/button";
import { BlogList } from "./blogList";
import { useRouter } from "next/router";
// import { TempblogList } from "../../temp/tempBlogList";

export function Blog(props) {
  const router = useRouter();

  return (
    <div>
      <ul className="my-10 ">
        <BlogList apiprops={props.apiprops.blog} />
      </ul>

      {router.pathname == "/" && <Button text="View All" href="/blog"/>}
    </div>
  );
}
