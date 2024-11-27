import React from "react";
import { Link } from "react-router-dom";

export default function Header({ logining }) {
  return (
    <header>
      <span>My Diary</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {logining ? (
          <>
            <li>
              <Link to="/login">login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/Student/codingon">Todo</Link>
            </li>
            <li>
              <Link to="/Student/new?name=kdt3rd">메모장</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
