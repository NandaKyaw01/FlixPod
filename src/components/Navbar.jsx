import React from "react";
import { LogoIcon, NotiIcon, ProfileIcon } from "../icon";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const sm = location.pathname;
  let para = null;
  if (sm.match("/movie") !== null) {
    para = sm.match("/movie")[0];
  } else if (sm.match("/tv") !== null) {
    para = sm.match("/tv")[0];
  }
  return (
    <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 custom-nav">
      <Link className=" col-md-3 col-lg-2 me-0 px-3 logospace" to="/">
        <LogoIcon />
      </Link>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed nav-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="navbar-expand custom-main-nav">
        <div className="container-fluid">
          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 leftnav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    location.pathname == "/" || para === "/movie"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  type="button"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="tv"
                  className={
                    location.pathname == "/tv" || para === "/tv"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  type="button"
                >
                  TV Shows
                </Link>
              </li>
            </ul>
            <span className="navbar-text d-none d-lg-block">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 profile">
                <li className="nav-item noti">
                  <NotiIcon />
                </li>
                <li className="nav-item">
                  <ProfileIcon />
                </li>
                <li className="nav-item name">
                  <a className="nav-link name" href="#">
                    Yasuo Itashi
                  </a>
                  <a className="nav-link email" href="#">
                    yasuoitashi@jupitor.jp
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
