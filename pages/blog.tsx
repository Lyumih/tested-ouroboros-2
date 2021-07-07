import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import BlogComponent from "../components/blog/blog";
import BreadCrumbs from "../components/bread-crumbs/bread-crumbs";
import {GetStaticProps} from "next";
import {getSortedNewsData} from "../lib/news";

export default function Blog({allNewsData, totalCount, pageCount, currentPage, perPage}) {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} | Новости проекта`}</title>
      </Head>
      <BreadCrumbs path={"Новости проекта"}/>
      <BlogComponent items={allNewsData} totalCount={totalCount} pageCount={pageCount} currentPage={currentPage} perPage={perPage}/>
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const allNewsData = getSortedNewsData();
  const currentPage  = 1
  const perPage = 8
  return {
    props: {
      allNewsData,
      totalCount: allNewsData.length,
      pageCount: Math.ceil(allNewsData.length / perPage),
      currentPage,
      perPage,
    },
  };
};
