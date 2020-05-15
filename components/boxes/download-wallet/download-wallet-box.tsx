import "./download-wallet-box.module.scss";

export default function DownloadWalletBox() {
  return (
    <div id="box-3-w">
      <div id="box-3">
        <h2>
          Download <span>My Wallet</span>
        </h2>
        <p>
          Secure DeepOnion wallet is available for Windows, Mac, <br />
          and Linux. The mobile wallet is available in the Google Play Store.{" "}
          <br />
          Also Available for Tails, Debian, and Ubuntu versions.
        </p>
        <a href="#" className="button-3">
          WEB client
        </a>
        <a href="#" className="appstore"></a>
        <a href="#" className="googleplay"></a>
        <div className="clear"></div>
      </div>
    </div>
  );
}
