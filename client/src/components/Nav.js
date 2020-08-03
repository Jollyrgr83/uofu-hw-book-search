import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-color">
      <ul className="nav">
        <li className="navbar brand">
          <a className="navbar brand" href="/">Google Books</a>
        </li>
        <li className="nav-item mt-2">
          <a className="nav-link" href="/">Search</a>
        </li>
        <li className="nav-item mt-2">
          <a className="nav-link" href="/">Saved</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
