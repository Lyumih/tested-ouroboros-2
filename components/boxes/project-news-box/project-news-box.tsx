import "./project-news-box.module.scss";
import Link from "next/link";

interface ProjectNewsBoxProps {
  items: [
    {
      title:string,
      img:string,
      id: string,
      date: string,
      fileContent: string
    }
  ]
}

export default function ProjectNewsBox({items}:ProjectNewsBoxProps) {
  console.log(items)
  return (
    <div id="box-6-w">
      <div id="box-6">
        <h2>
          Latest project <span>news</span>
        </h2>
        <div className="box-6-w">
          {items.map(item=> {
            return (
                <Link  href={`/news/${item.id}`} key={item.id}>
                  <a className="box-6">
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                    <div className="clear"></div>
                  </a>
                </Link>            )
          })}
          <div className="clear"></div>
        </div>
        <div className="clear"></div>
        <Link href="/blog">
          <a className="button-6">More news</a>
        </Link>
        <div className="clear"></div>
      </div>
    </div>
  );
}
