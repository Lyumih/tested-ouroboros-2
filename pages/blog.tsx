import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Blog from "../components/blog/blog";
import BreadCrumbs from "../components/bread-crumbs/bread-crumbs";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} | News Project`}</title>
      </Head>
      <BreadCrumbs paths={["News project", "s"]} />
      <Blog />
    </Layout>
  );
}
