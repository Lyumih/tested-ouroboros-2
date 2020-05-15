import "./bread-crumbs.module.scss";
import Link from "next/link";

export default function BreadCrumbs({ paths }: { paths: string[] }) {
  return (
    <div id="bread-crumbs-w">
      <div id="bread-crumbs">
        <p>
          {/* <Link href="/"> */}
            <a className="home-crumbs">Home</a>
          {/* </Link> */}
          {paths.map((path) => (
            <>
              <span> / </span>
              {path}
            </>
          ))}
        </p>
        <div className="clear"></div>
      </div>
    </div>
  );
}
