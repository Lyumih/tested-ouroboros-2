import "./about-box.module.scss";

export default function AboutBox() {
  return (
    <div id="box-4-w">
      <div id="box-4">
        <h2 id="about">
          Узнать  больше об <span>Ouroboros</span>
        </h2>
        <div className="lightGallery">
          <div data-src="https://www.youtube.com/embed/TXoTOXtGc9Y" className="videobox">
            <img src="/images/19.jpg" alt="" />
            <div className="play-w">
              <div className="play"></div>
              <div className="pulse-1"></div>
              <div className="pulse-2"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}
