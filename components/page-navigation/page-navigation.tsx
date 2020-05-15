import "./page-navigation.module.scss";

export default function PageNavigation() {
  return (
    <div className="page-navigation">
      <a href="" className="previous-button">
        previous
      </a>
      <a href="" className="page-button active-page-button">
        1
      </a>
      <a href="" className="page-button">
        2
      </a>
      <a href="" className="page-button">
        3
      </a>
      <a href="" className="page-button">
        4
      </a>
      <a href="" className="page-button page-none">
        5
      </a>
      <a href="" className="page-button page-none">
        6
      </a>
      <a href="" className="page-button page-none">
        7
      </a>
      <a href="" className="page-button page-none">
        8
      </a>
      <div className="page-none-button">...</div>
      <a href="" className="page-button">
        14
      </a>
      <a href="" className="next-button">
        next
      </a>
      <div className="clear"></div>
    </div>
  );
}
