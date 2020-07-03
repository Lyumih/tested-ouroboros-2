import "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div id="top-w">
        <div id="top">
          <Link href="/">
            <a className="logo">Ouroboros</a>
          </Link>
          <div className="lang-w">
            {/*<a href="#" className="lang-en lang-active">*/}
            {/*  en*/}
            {/*</a>*/}
            <a href="#" className="lang-ru lang-active">
              ru
            </a>
            {/*<a href="#" className="lang-tr">*/}
            {/*  tr*/}
            {/*</a>*/}
            <div className="clear"></div>
          </div>
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
          <div className="clear"></div>
        </div>
      </div>
    </header>
  );
}
