import Head from "next/head";
import Header from './header/header'
import Footer from './footer/footer'
export const siteTitle = "Ouroboros";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="page">
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
      <Header />
      <main>{children}</main>
      <Footer />
      
      <script src="/js/jquery-1.8.2.min.js"></script>
      <script src="/js/jquery.validate.js"></script>
      <script src="/js/jquery.transit.min.js"></script>
      <script src="/js/lightGallery/lightGallery.js"></script>
      <script src="/js/jquery.form.js"></script>
      <script src="/js/main.js"></script>
    </div>
  );
}
