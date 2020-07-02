import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import PromoBox from "../components/boxes/promo-box/promo-box";
import CasesBox from "../components/boxes/cases-box/cases-box";
import DownloadWalletBox from "../components/boxes/download-wallet/download-wallet-box";
import AboutBox from "../components/boxes/about-box/about-box";
import CryptocurrencyBox from "../components/boxes/cryptocurrency/cryptocurrency-box";
import ProjectNewsBox from "../components/boxes/project-news-box/project-news-box";
import SubscribeBox from "../components/boxes/subscribe-box/subscribe-box";
import {getSortedNewsData} from "../lib/news";
import {GetStaticProps} from "next";

export default function Home({allNewsData}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <PromoBox />
      <CasesBox />
      <DownloadWalletBox />
      <AboutBox />
      <CryptocurrencyBox />
      <ProjectNewsBox items={allNewsData} />
      <SubscribeBox />
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

