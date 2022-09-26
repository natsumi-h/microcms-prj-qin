import { Blog } from "../components/blog/blog";
import { Github } from "../components/layout/top/github/github";
import { MainVisual } from "../components/layout/top/mv";
import { Portfolio } from "../components/layout/top/portfolio/portfolio";
import { Section } from "../components/layout/top/section";
import { Twitter } from "../components/layout/top/twitter/twitter";
import { microcmsClient } from "../libs/microcmsClient";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { apolloClient } from "../libs/apolloClient";
import { gql } from "@apollo/client";

export default function Home(props) {
  // console.log(props);
  return (
    <div>
      <MainVisual />
      <Section title="Blog" content={<Blog apiprops={props} />} />
      <Section title="Portfolio" content={<Portfolio />} />
      <div className="md:flex">
        <Section title="Github" content={<Github  apiprops={props}/>} half="true" />
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
  // microCMS //
  const data = await microcmsClient.get({ endpoint: "blog" });
  const params = {
    exclude: "retweets,replies",
    expansions: "author_id",
    "tweet.fields": "created_at,entities",
    "user.fields": "id,username,name,profile_image_url",
    max_results: "5",
  };

  //Twitter //
  const query = new URLSearchParams(params);
  const tweetsRes = await fetch(
    `https://api.twitter.com/2/users/${process.env.NEXT_PUBLIC_TWITTER_USERID}/tweets?${query}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_TOKEN}`,
      },
    }
  );
  const tweetsData = await tweetsRes.json();
  // console.log(tweetsData);

  const githubData = await apolloClient.query({
    query: gql`
      query {
        user(login: "natsumi-h") {
          repositories(
            privacy: PUBLIC
            ownerAffiliations: [OWNER]
            first: 5
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            nodes {
              id
              name
              url
              description
              forkCount
              stargazerCount
              languages(first: 100, orderBy: { field: SIZE, direction: DESC }) {
                totalCount
                totalSize
                edges {
                  size
                  node {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
  console.log(githubData.data.user.repositories.nodes);

  return {
    props: {
      blog: data.contents,
      tweets: tweetsData.data,
      tweetsUser: tweetsData.includes.users,
      githubRepos: githubData.data.user.repositories.nodes,
    },
  };
};
