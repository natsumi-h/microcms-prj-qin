// import Image from "next/image";
import { Blog } from "../components/layout/top/blog/blog";
import { Github } from "../components/layout/top/github/github";
import { MainVisual } from "../components/layout/top/mv";
import { Portfolio } from "../components/layout/top/portfolio/portfolio";
import { Section } from "../components/layout/top/section";
import { Twitter } from "../components/layout/top/twitter/twitter";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <MainVisual />
      <Section title="Blog" content={<Blog />} />
      <Section title="Portfolio" content={<Portfolio />} />
      <div className="md:flex">
        <Section  title="Github" content={<Github />} half="true"/>
        <Section  title="Twitter" content={<Twitter />} half="true"/>
      </div>
    </div>
  );
}
