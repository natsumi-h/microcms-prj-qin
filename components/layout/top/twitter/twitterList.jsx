import dayjs from "dayjs";

export function TwitterList(props) {
  const tweetsProps = props.apiprops.tweets;
  const tweetsUser = props.apiprops.tweetsUser[0];
  const filteredTweetsProps = tweetsProps.filter(
    (tweetsProps, index) => index <= 2
  );

  return filteredTweetsProps.map((tweet) => (
    <li
      className="bg-gray-50 dark:bg-black flex items-center justify-center"
      key={tweet.id}
    >
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl  max-w-xl">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              className="h-11 w-11 rounded-full"
              src={tweetsUser.profile_image_url}
            />
            <div className="ml-1.5 text-sm leading-tight">
              <span className="text-black dark:text-white font-bold block ">
                {tweetsUser.name}
              </span>
              <span className="text-gray-500 dark:text-gray-400 font-normal block">
                @{tweetsUser.username}
              </span>
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
            {dayjs(tweet.created_at).format("MM月DD日")}
          </p>
        </div>
        <p className="text-black dark:text-white block text-xl leading-snug mt-3">
          {tweet.text}
        </p>
        <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-5"></div>
      </div>
    </li>
  ));
}
