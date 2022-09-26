import { Button } from "../button";
import { GithubList } from "./githubList";

export function Github(props) {
  return (
    <div>
      <ul>
        <GithubList apiprops={props.apiprops} />
      </ul>
      <Button text="View on Github" href="https://github.com/" />
    </div>
  );
}
