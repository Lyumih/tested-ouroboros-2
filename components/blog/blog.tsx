import "./blog.module.scss";
import PageNavigation from "../page-navigation/page-navigation";
import Link from "next/link";

export default function Blog() {
  return (
    <div id="news-project-w">
      <div id="news-project">
        <h2>News project</h2>
        <div className="news-project-w">
          <Link href="/blog-article">
            <a className="news-project">
              <img src="images/39.jpg" alt="" />
              <p>
                Открытие офисов <br />
                Ouroboros
              </p>
              <div className="clear"></div>
            </a>
          </Link>
          <a href="" className="news-project">
            <img src="images/40.jpg" alt="" />
            <p>
              Ouroboros на форуме <br />
              Блокчейн Лайф
            </p>
            <div className="clear"></div>
          </a>
           <Link href="/blog-article">
          <a href="" className="news-project">
            <img src="images/41.jpg" alt="" />
            <p>
              Регистрация кошелька <br />
              Ouroboros
            </p>
            <div className="clear"></div>
          </a>
          </Link>
           <Link href="/blog-article">
          <a href="" className="news-project">
            <img src="images/42.jpg" alt="" />
            <p>
              Калькулятор доходности <br />
              Ouroboros
            </p>
            <div className="clear"></div>
          </a>
          </Link>
           <Link href="/blog-article">
          <a href="" className="news-project">
            <img src="images/43.jpg" alt="" />
            <p>
              Открытие офисов <br />
              Ouroboros
            </p>
            <div className="clear"></div>
          </a>
          </Link>
           <Link href="/blog-article">
          <a href="" className="news-project">
            <img src="images/44.jpg" alt="" />
            <p>
              Ouroboros на форуме <br />
              Блокчейн Лайф
            </p>
            <div className="clear"></div>
          </a>
          </Link>
           <Link href="/blog-article">
          <a href="" className="news-project">
            <img src="images/45.jpg" alt="" />
            <p>
              Регистрация кошелька <br />
              Ouroboros
            </p>
            <div className="clear"></div>
          </a>
          </Link>
           <Link href="/blog-article">
          <a href="" className="news-project">
            <img src="images/46.jpg" alt="" />
            <p>
              Калькулятор доходности <br />
              Ouroboros
            </p>
            <div className="clear"></div>
          </a>
          </Link>
           <Link href="/blog-article">
          <a href="" className="news-project">
            <img src="images/47.jpg" alt="" />
            <p>
              Открытие офисов <br />
              Ouroboros
            </p>
            <div className="clear"></div>
          </a>
          </Link>
           <Link href="/blog-article">
          <a href="" className="news-project">
            <img src="images/48.jpg" alt="" />
            <p>
              Ouroboros на форуме <br />
              Блокчейн Лайф
            </p>
            <div className="clear"></div>
          </a>
          </Link>
           <Link href="/blog-article">
          <a href="" className="news-project">
            <img src="images/49.jpg" alt="" />
            <p>
              Регистрация кошелька <br />
              Ouroboros
            </p>
            <div className="clear"></div>
          </a>
          </Link>
           <Link href="/blog-article">
          <a href="" className="news-project">
            <img src="images/50.jpg" alt="" />
            <p>
              Калькулятор доходности <br />
              Ouroboros
            </p>
            <div className="clear"></div>
          </a>
          </Link>
          <div className="clear"></div>
        </div>
        <PageNavigation />
        <div className="clear"></div>
      </div>
    </div>
  );
}