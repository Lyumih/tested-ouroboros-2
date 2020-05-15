import "./box4.module.scss";

export default function Box4() {
  return (
    <div id="box-4-w">
      <div id="box-4">
        <h2>
          Learn more about <span>Ouroboros</span>
        </h2>
        <div className="lightGallery">
          <div data-src="https://youtu.be/vN7l7JisbSk" className="videobox">
            <img src="images/19.jpg" alt="" />
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
