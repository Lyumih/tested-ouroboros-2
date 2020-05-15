import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import BreadCrumbs from "../components/bread-crumbs/bread-crumbs";
import BlogArticle from "../components/blog-article/blog-article";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} | News Project`}</title>
      </Head>
      <BreadCrumbs path={"News project"} />
      <BlogArticle />
      <div id="news-project-w">
        <div id="news-project-w1">
          <div id="news-project">
            <h3>Читайте также:</h3>
            <div className="news-project-w">
              <Link href="/blog">
                <a className="news-project">
                  <img src="images/43.jpg" alt="" />
                  <p>
                    Открытие офисов <br />
                    Ouroboros
                  </p>
                  <div className="clear"></div>
                </a>
              </Link>
              <Link href="/blog">
                <a href="" className="news-project">
                  <img src="images/44.jpg" alt="" />
                  <p>
                    Ouroboros на форуме <br />
                    Блокчейн Лайф
                  </p>
                  <div className="clear"></div>
                </a>
              </Link>
              <Link href="/blog">
                <a href="" className="news-project">
                  <img src="images/45.jpg" alt="" />
                  <p>
                    Регистрация кошелька <br />
                    Ouroboros
                  </p>
                  <div className="clear"></div>
                </a>
              </Link>
              <Link href="/blog">
                <a href="" className="news-project">
                  <img src="images/46.jpg" alt="" />
                  <p>
                    Калькулятор доходности <br />
                    Ouroboros
                  </p>
                  <div className="clear"></div>
                </a>
              </Link>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
