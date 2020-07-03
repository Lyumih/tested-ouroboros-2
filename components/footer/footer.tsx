import "./footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div id="bottom-w">
        <div id="bottom">
          <Link href="/">
            <a className="logo">Ouroboros</a>
          </Link>
          <div className="menu">
            <Link href="/#about">
              <a>О проекте</a>
            </Link>
            <Link href="/#timeline">
              <a>Карта</a>
            </Link>
            <Link href="/#cases">
              <a>Что делает нас уникальными</a>
            </Link>
            <Link href="/#paramining">
              <a>Постмайнинг</a>
            </Link>
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
            <a href="#" target="_blank" className="bitcoin"></a>
            <div className="clear"></div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </footer>
  );
}
