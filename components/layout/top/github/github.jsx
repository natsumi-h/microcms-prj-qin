import { Button } from "../button";
import { GithubList } from "./githubList";

export function Github() {
  return (
    <div>
      <ul>
        <GithubList
          img="githubimage 1"
          title="githubtitle 1"
          excerpt="excerpt 1 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date1 2022/08/11"
        />
        <GithubList
          img="githubimage 2"
          title="githubtitle 2"
          excerpt="excerpt 2 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date2 2022/08/11"
        />
        <GithubList
          img="githubimage 3"
          title="githubtitle 3"
          excerpt="excerpt 3 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date3 2022/08/11"
        />
        <GithubList
          img="githubimage 4"
          title="githubtitle 4"
          excerpt="excerpt 4 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          date="date4 2022/08/11"
        />
      </ul>
      <Button />
    </div>
  );
}
