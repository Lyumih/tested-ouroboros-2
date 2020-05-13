import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <!-- bread-crumbs --> */}

      <div id="bread-crumbs-w">
        <div id="bread-crumbs">
          <p>
            <a href="index.html" className="home-crumbs">
              Home
            </a>
            <span> / </span>News project
          </p>
          <div className="clear"></div>
        </div>
      </div>

      {/* <!-- news-project --> */}
      <div id="news-project-w">
                <div id="news-project">
                    <h2>News project</h2>
                    <div className="news-project-w">
                        {/* <!-- --> */}
                        <a href="" className="news-project">
                            <img src="images/39.jpg" alt=""/>
                            <p>Открытие офисов <br />Ouroboros</p>
                            <div className="clear"></div>
                        </a>
                        {/* <!-- --> */}
                        <a href="" className="news-project">
                            <img src="images/40.jpg" alt=""/>
                            <p>Ouroboros на форуме <br />Блокчейн Лайф</p>
                            <div className="clear"></div>
                        </a>
                        {/* <!-- --> */}
                        <a href="" className="news-project">
                            <img src="images/41.jpg" alt=""/>
                            <p>Регистрация кошелька <br />Ouroboros</p>
                            <div className="clear"></div>
                        </a>
                        {/* <!-- --> */}
                        <a href="" className="news-project">
                            <img src="images/42.jpg" alt=""/>
                            <p>Калькулятор доходности <br />Ouroboros</p>
                            <div className="clear"></div>
                        </a>
                        {/* <!-- --> */}
                        <a href="" className="news-project">
                            <img src="images/43.jpg" alt=""/>
                            <p>Открытие офисов <br />Ouroboros</p>
                            <div className="clear"></div>
                        </a>
                        {/* <!-- --> */}
                        <a href="" className="news-project">
                            <img src="images/44.jpg" alt=""/>
                            <p>Ouroboros на форуме <br />Блокчейн Лайф</p>
                            <div className="clear"></div>
                        </a>
                        {/* <!-- --> */}
                        <a href="" className="news-project">
                            <img src="images/45.jpg" alt=""/>
                            <p>Регистрация кошелька <br />Ouroboros</p>
                            <div className="clear"></div>
                        </a>
                        {/* <!-- --> */}
                        <a href="" className="news-project">
                            <img src="images/46.jpg" alt=""/>
                            <p>Калькулятор доходности <br />Ouroboros</p>
                            <div className="clear"></div>
                        </a>
                        {/* <!-- --> */}
                        <a href="" className="news-project">
                            <img src="images/47.jpg" alt=""/>
                            <p>Открытие офисов <br />Ouroboros</p>
                            <div className="clear"></div>
                        </a>
                        {/* <!-- --> */}
                        <a href="" className="news-project">
                            <img src="images/48.jpg" alt=""/>
                            <p>Ouroboros на форуме <br />Блокчейн Лайф</p>
                            <div className="clear"></div>
                        </a>
                        {/* <!-- --> */}
                        <a href="" className="news-project">
                            <img src="images/49.jpg" alt=""/>
                            <p>Регистрация кошелька <br />Ouroboros</p>
                            <div className="clear"></div>
                        </a>
                        {/* <!-- --> */}
                        <a href="" className="news-project">
                            <img src="images/50.jpg" alt=""/>
                            <p>Калькулятор доходности <br />Ouroboros</p>
                            <div className="clear"></div>
                        </a>
                        {/* <!-- --> */}
                        <div className="clear"></div>
                    </div>
                    <div className="page-navigation">
                        <a href="" className="previous-button">previous</a>
                        <a href="" className="page-button active-page-button">1</a>
                        <a href="" className="page-button">2</a>
                        <a href="" className="page-button">3</a>
                        <a href="" className="page-button">4</a>
                        <a href="" className="page-button page-none">5</a>
                        <a href="" className="page-button page-none">6</a>
                        <a href="" className="page-button page-none">7</a>
                        <a href="" className="page-button page-none">8</a>
                        <div className="page-none-button">...</div>
                        <a href="" className="page-button">14</a>
                        <a href="" className="next-button">next</a>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
    </Layout>
  );
}
