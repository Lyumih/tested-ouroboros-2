import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Box1 from "../components/boxes/box1/box1";
import Box2 from "../components/boxes/box2/box2";
import Box3 from "../components/boxes/box3/box3";
import Box4 from "../components/boxes/box4/box4";
import Box5 from "../components/boxes/box5/box5";
import Box6 from "../components/boxes/box6/box6";
import Box7 from "../components/boxes/box7/box7";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box1 />
      <Box2 />
      {/* <Box3 /> */}
      <Box4 />
      <Box5 />
      <Box6 />
      <Box7 />
    </Layout>
  );
}
