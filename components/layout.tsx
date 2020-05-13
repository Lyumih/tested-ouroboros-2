import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "Ouroboros. ";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>Header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}
