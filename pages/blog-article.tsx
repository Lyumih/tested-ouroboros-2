import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>Секция 1</section>
      <section>Секция 2</section>
      <section>Секция 3</section>
    </Layout>
  );
}
