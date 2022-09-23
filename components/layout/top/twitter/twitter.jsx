import { Button } from "../button";
import { TwitterList } from "./twitterList";

export function Twitter(props) {
  return (
    <div>
      <ul>
        <TwitterList apiprops={props.apiprops} />
      </ul>
      <Button text="View on Twitter" href="https://twitter.com/natsumicoder" />
    </div>
  );
}
