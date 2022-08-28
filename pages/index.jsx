import { Blog } from "../components/blog/blog";
import { Github } from "../components/layout/top/github/github";
import { MainVisual } from "../components/layout/top/mv";
import { Portfolio } from "../components/layout/top/portfolio/portfolio";
import { Section } from "../components/layout/top/section";
import { Twitter } from "../components/layout/top/twitter/twitter";
import { client } from "../libs/client";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Home(blog) {
  return (
    <div>
      <MainVisual />
      <Section title="Blog" content={<Blog apiprops={blog} />} />
      <Section title="Portfolio" content={<Portfolio />} />
      <div className="md:flex">
        <Section title="Github" content={<Github />} half="true" />
        <Section title="Twitter" content={<Twitter />} half="true" />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};
