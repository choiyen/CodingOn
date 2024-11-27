import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <span>Router Tutorial</span>
      <ul>
        <li>
          <Link to="/">REACTROUTER 실습</Link>
        </li>
        <li>
          <Link to="/Student/kdt">학생 KDT</Link>
        </li>
        <li>
          <Link to="/Student/codingon">코딩온</Link>
        </li>
        <li>
          <Link to="/Student/new?name=kdt3rd">searchParams</Link>
        </li>
      </ul>
    </header>
  );
}
