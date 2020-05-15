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
            <a href="#" className="lang-en lang-active">
              en
            </a>
            <a href="#" className="lang-ru">
              ru
            </a>
            <a href="#" className="lang-tr">
              tr
            </a>
            <div className="clear"></div>
          </div>
          <div className="menu">
            <Link href="/#about">
              <a>About The Project</a>
            </Link>
            <Link href="/#timeline">
              <a>Road Map</a>
            </Link>
            <Link href="/#cases">
              <a>What Makes Us Unique</a>
            </Link>
            <Link href="/#paramining">
              <a>Paramining</a>
            </Link>
            <div className="clear"></div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </header>
  );
}
