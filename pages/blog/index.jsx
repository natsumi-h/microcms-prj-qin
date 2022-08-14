import { Blog } from "../../components/layout/page/blog/blog";
import { PageTitle } from "../../components/layout/page/title";

export default function BlogPage() {
  return (
    <div className="pb-20 pt-20 px-5 md:px-40">
      <PageTitle title="Blog"/>
      <Blog />
    </div>
  );
}