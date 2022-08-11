import { Button } from "../button";
import { BlogList } from "./blogList";

export function Blog() {
  return (
    <div>
      <ul className="my-10">
        <BlogList
          title="blogtitle 1"
          excerpt="excerpt 1 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date1 2022/08/11"
        />
        <BlogList
          title="blogtitle 2"
          excerpt="excerpt 2 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date2 2022/08/11"
        />
        <BlogList
          title="blogtitle 3"
          excerpt="excerpt 3 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date3 2022/08/11"
        />
        <BlogList
          title="blogtitle 4"
          excerpt="excerpt 4 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date4 2022/08/11"
        />
      </ul>

      <Button />
    </div>
  );
}
