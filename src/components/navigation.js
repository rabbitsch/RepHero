import React from "react";

import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="row">
      <div className="col-12">
        <nav className="toolbar_nav">
          <ul>
            <li>
              <a href="#logout">Log out</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
