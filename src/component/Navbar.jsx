import React from "react";

export default function Navbar() {
  return (
    <div className="d-flex flex-nowrap flex-row justify-content-between">
      <div className="bd-highlight bg-light main-heading">
        <a className="nav-link" href="#home" style={{ color: "inherit" }}>
          &lt;Karunesh Tripathi&gt;
        </a>
      </div>
      <div className="p-1 mx-2 bd-highlight main-heading-mobile">
        <b>&lt;KT&gt;</b>
      </div>
      <ul className="nav p-2 fs-5 top-50 nav-menu">
        <li className="nav-item p-2">
          <a className="nav-link " href="#home">
            Home
          </a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </li>
        <li className="nav-item p-2 ">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="dropdown py-3 mx-3 nav-menu-mobile">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
