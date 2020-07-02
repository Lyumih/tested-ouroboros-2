import "./page-navigation.module.scss";
import Link from "next/link";
import {useState} from "react";

interface PageNavigationProps {
    current: number,
    total: number,
    limit: number,
    onClick: () => void
}

export default function PageNavigation({current, total, limit, onClick}: PageNavigationProps) {


  return (
    <div className="page-navigation">
      <div>{`current ${current}, total ${total}, limit ${limit}`}</div>



      <Link href={"?page=1"}>
        <a className="previous-button">
          previous
        </a>
      </Link>
      <Link href={"?page=1"}>
        <a className="page-button active-page-button">
          1
        </a>
      </Link>

      <a href="#" className="page-button">
        2
      </a>
      <a href="#" className="page-button">
        3
      </a>
      <a href="#" className="page-button">
        4
      </a>
      <a href="#" className="page-button page-none">
        5
      </a>
      <a href="#" className="page-button page-none">
        6
      </a>
      <a href="#" className="page-button page-none">
        7
      </a>
      <a href="#" className="page-button page-none">
        8
      </a>
      <div className="page-none-button">...</div>

      <a href="#" className="page-button">
        14
      </a>
      <a href="#" className="next-button">
        next
      </a>

      <div className="clear"></div>

    </div>
  );
}
