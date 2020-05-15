import "./bread-crumbs.module.scss";
import Link from "next/link";

export default function BreadCrumbs({ path }: { path: string }) {
  return (
    <div id="bread-crumbs-w">
      <div id="bread-crumbs">
        <p>
          <Link href="/">
            <a className="home-crumbs">Home</a>
          </Link>
          <span> / </span>
          {path}
        </p>
        <div className="clear"></div>
      </div>
    </div>
  );
}
