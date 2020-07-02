import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import BlogComponent from "../components/blog/blog";
import BreadCrumbs from "../components/bread-crumbs/bread-crumbs";
import {GetStaticProps} from "next";
import {getSortedNewsData} from "../lib/news";

export default function Blog({allNewsData}) {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} | News Project`}</title>
      </Head>
      <BreadCrumbs path={"News project"} />
      <BlogComponent items={allNewsData} />
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async () => {
    const allNewsData = getSortedNewsData();
    return {
        props: {
            allNewsData,
        },
    };
};
