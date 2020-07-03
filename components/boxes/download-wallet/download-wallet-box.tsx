import "./download-wallet-box.module.scss";

export default function DownloadWalletBox() {
  return (
    <div id="box-3-w">
      <div id="box-3">
        <h2 id="download-wallet">
          Скачать <span>Кошелек</span>
        </h2>
        <p>
          Безопасный кошелек  Ouroboros  доступен  для Windows, Mac и Linux.
          <br />
          Мобильный  кошелек  доступен в магазине Google play, App Store.
        </p>
        <a href="#" className="button-3">
          Браузерная версия
        </a>
        <a href="#" className="appstore"></a>
        <a href="#" className="googleplay"></a>
        <div className="clear"></div>
      </div>
    </div>
  );
}
