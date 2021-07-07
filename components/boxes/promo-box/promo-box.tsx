import "./promo-box.module.scss";
import Link from "next/link";
import {FACEBOOK_URL, INSTAGRAM_URL, VK_URL, YOUTUBE_URL} from "../../../constants";

export default function PromoBox() {
  return (
    <div id="box-1-w">
      <div id="box-1-w1">
        <div id="box-1">
          <div className="social" id="promo">
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
          <h1>
            <span className="sp1-1">
              <span className="sp1-2">Ouroboros это криптовалюта нового поколения</span>{" "}
              с механизмом посмайнинга{/* и возможностью построения собственной структуры
              последователей, встроенной в блокчейн */}.
              {/* Мы учли ошибки предшественников и создали по-настоящему безопасное решение - как в плане экономической модели, так и в плане информационной безопасности.
               */}
            </span>
            <br />
            Для дальнейшего использования в реальних экономических отраслях
          </h1>
          <Link href="/#cases">
            <a className="button-1">
              Узнать больше
            </a>
          </Link>

          <Link href="/#download-wallet">
            <a className="button-2">
              Подключиться
            </a>
          </Link>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}
