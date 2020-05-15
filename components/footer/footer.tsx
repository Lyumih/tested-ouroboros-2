import './footer.module.scss'

export default function Footer() {
  return(
  <footer>
        <div id="bottom-w">
          <div id="bottom">
            <a href="" className="logo">
              Ouroboros
            </a>
            <div className="menu">
              <a href="">About The Project</a>
              <a href="">Road Map</a>
              <a href="">What Makes Us Unique</a>
              <a href="">Paramining</a>
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
              <a href="" target="_blank" className="bitcoin"></a>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </footer>
      )
}