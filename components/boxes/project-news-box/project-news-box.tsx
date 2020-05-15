import "./project-news-box.module.scss";
import Link from "next/link";

export default function ProjectNewsBox() {
  return (
    <div id="box-6-w">
      <div id="box-6">
        <h2>
          Latest project <span>news</span>
        </h2>
        <div className="box-6-w">
          <Link  href="/blog-article">
          <a className="box-6">
            <img src="images/29.jpg" alt="" />
            <p>Открытие офисов Ouroboros</p>
            <div className="clear"></div>
          </a>
          </Link>
          
          <Link  href="/blog-article">
          <a className="box-6">
            <img src="images/30.jpg" alt="" />
            <p>OUROBOROS на форуме Блокчейн Лайф</p>
            <div className="clear"></div>
          </a>
          </Link>
          
          <Link  href="/blog-article">
          <a className="box-6">
            <img src="images/31.jpg" alt="" />
            <p>Регистрация кошелька Ouroboros</p>
            <div className="clear"></div>
          </a>
          </Link>
          
          <Link  href="/blog-article">
          <a className="box-6">
            <img src="images/32.jpg" alt="" />
            <p>Калькулятор доходности Ouroboros</p>
            <div className="clear"></div>
          </a>
          </Link>
          <div className="clear"></div>
        </div>
        <div className="clear"></div>
        <Link href="/blog">
          <a className="button-6">More news</a>
        </Link>
        <div className="clear"></div>
      </div>
      {/* <!-- --> */}
    </div>
  );
}
