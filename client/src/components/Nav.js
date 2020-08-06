import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-color">
      <ul className="nav">
        <li className="navbar brand">
          <a className="navbar brand links" href="https://books.google.com/">Google Books</a>
        </li>
        <li className="nav-item mt-2">
          <a className="nav-link links" href="/search">Search for Books</a>
        </li>
        <li className="nav-item mt-2">
          <a className="nav-link links" href="/saved">View Saved Books</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
