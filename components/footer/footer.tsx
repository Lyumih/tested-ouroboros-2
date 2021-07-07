import "./footer.module.scss";
import Link from "next/link";
import {FACEBOOK_URL, INSTAGRAM_URL, VK_URL, YOUTUBE_URL} from "../../constants";

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
              href={VK_URL}
              target="_blank"
              className="vk"
            ></a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              className="facebook"
            ></a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              className="youtube"
            ></a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              className="instagram"
            ></a>
            <div className="clear"></div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </footer>
  );
}
