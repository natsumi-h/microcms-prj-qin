// import { Button } from "../button";
import { BlogList } from "./blogList";

export function Blog() {
  return (
    <div >
      <ul className="my-10">
        <BlogList
          id="1"
          title="blogtitle 1"
          excerpt="excerpt 1 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date1 2022/08/11"
        />
        <BlogList
          id="2"
          title="blogtitle 2"
          excerpt="excerpt 2 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date2 2022/08/11"
        />
        <BlogList
          id="3"
          title="blogtitle 3"
          excerpt="excerpt 3 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date3 2022/08/11"
        />
        <BlogList
          id="4"
          title="blogtitle 4"
          excerpt="excerpt 4 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date4 2022/08/11"
        />
        <BlogList
          id="5"
          title="blogtitle 4"
          excerpt="excerpt 4 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date4 2022/08/11"
        />
        <BlogList
          id="6"
          title="blogtitle 4"
          excerpt="excerpt 4 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date4 2022/08/11"
        />
        <BlogList
          id="7"
          title="blogtitle 4"
          excerpt="excerpt 4 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date4 2022/08/11"
        />
        <BlogList
          id="8"
          title="blogtitle 4"
          excerpt="excerpt 4 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date4 2022/08/11"
        />
      </ul>

      {/* <Button /> */}
    </div>
  );
}
