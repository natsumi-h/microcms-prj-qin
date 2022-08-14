import Head from "next/head";
import { Footer } from "./footer";
import { Header } from "./header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Natsumiのポートフォリオ",
  description: "Natsumiのポートフォリオです！",
  keywords: "programing, frontend, nextjs, react",
};
