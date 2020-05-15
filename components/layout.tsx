import Head from "next/head";

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
        <link
          href="/js/lightGallery/lightGallery.css"
          type="text/css"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />

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
      <footer>
        <div id="bottom-w">
          <div id="bottom">
            <a href="" className="logo">
              Ouroboros
            </a>
            <div className="menu">
              <a href="">About The Project</a>
              <a href="">Road Map</a>
              <a href="">What Makes Us Unique</a>
              <a href="">Paramining</a>
              <div className="clear"></div>
            </div>
            <div className="social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="facebook"
              ></a>
              <a
                href="https://www.t.me/"
                target="_blank"
                className="telegram"
              ></a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                className="twitter"
              ></a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="youtube"
              ></a>
              <a href="" target="_blank" className="bitcoin"></a>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </footer>
      <script src="/js/jquery-1.8.2.min.js"></script>
      <script src="/js/jquery.validate.js"></script>
      <script src="/js/jquery.transit.min.js"></script>
      <script src="/js/lightGallery/lightGallery.js"></script>
      <script src="/js/jquery.form.js"></script>
      <script src="/js/main.js"></script>
    </div>
  );
}
