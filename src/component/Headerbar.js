import React from "react";
import { Link, Router } from "react-router-dom";

export default function Headerbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="navbar-item">
              <Link className="nav-link" to="/">
                ADD{" "}
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/show">
                SHOW{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
