import { Blog } from "../components/blog/blog";
import { Github } from "../components/layout/top/github/github";
import { MainVisual } from "../components/layout/top/mv";
import { Portfolio } from "../components/layout/top/portfolio/portfolio";
import { Section } from "../components/layout/top/section";
import { Twitter } from "../components/layout/top/twitter/twitter";
import { client } from "../libs/client";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Home(props) {
  // console.log(props);
  return (
    <div>
      <MainVisual />
      <Section title="Blog" content={<Blog apiprops={props} />} />
      <Section title="Portfolio" content={<Portfolio />} />
      <div className="md:flex">
        <Section title="Github" content={<Github />} half="true" />
        <Section
          title="Twitter"
          content={<Twitter apiprops={props} />}
          half="true"
        />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  const tweetsRes = await fetch(
    `https://api.twitter.com/2/users/${process.env.NEXT_PUBLIC_TWITTER_USERID}/tweets?exclude=retweets,replies&tweet.fields=created_at&expansions=author_id&user.fields=id,username,name,profile_image_url`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_TOKEN}`,
      },
    }
  );
  const tweetsData = await tweetsRes.json();
  return {
    props: {
      blog: data.contents,
      tweets: tweetsData.data,
      tweetsUser: tweetsData.includes.users,
    },
  };
};
