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
    <div className="container page">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
        <div id="top-w">
          <div id="top">
            <a href="" className="logo">
              Ouroboros
            </a>
            <div className="lang-w">
              <a href="" className="lang-en lang-active">
                en
              </a>
              <a href="" className="lang-ru">
                ru
              </a>
              <a href="" className="lang-tr">
                tr
              </a>
              <div className="clear"></div>
            </div>
            <div className="menu">
              <a href="">About The Project</a>
              <a href="">Road Map</a>
              <a href="">What Makes Us Unique</a>
              <a href="">Paramining</a>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}
