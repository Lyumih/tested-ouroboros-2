import "./promo-box.module.scss";

export default function PromoBox() {
  return (
    <div id="box-1-w">
      <div id="box-1-w1">
        <div id="box-1">
          <div className="social" id="promo">
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
            <a href="" target="_blank" className="bitcoin"></a>
            <div className="clear"></div>
          </div>
          <h1>
            <span className="sp1-1">
              <span className="sp1-2">Ouroboros is a new cryptocurrency</span>{" "}
              that aims to provide fast and secure transactions
            </span>
            <br />
            for the future use in the real economic sector
          </h1>
          <a href="" className="button-1">
            Learn More
          </a>
          <a href="" className="button-2">
            Start Using
          </a>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}
