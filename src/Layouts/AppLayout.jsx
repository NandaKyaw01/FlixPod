import React, { useEffect, useState } from "react";
import { CommingSoonIcon, LogoIcon, NotiIcon, ProfileIcon } from "../icon";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  BookmarkedIcon,
  CommunityIcon,
  DiscoveryIcon,
  DownloadIcon,
  HomeIcon,
  LogoutIcon,
  RecentIcon,
  TopratedIcon,
} from "../icon";

const HomeNav = () => {
  return (
    <>
      <li className="nav-item">
        <NavLink to="/" className="nav-link" type="button">
          Movies
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/tv" className="nav-link" type="button">
          TV Shows
        </NavLink>
      </li>
    </>
  );
};

const ENUM_STATES = {
  home: <HomeNav />,
  tv: <HomeNav />,
  discovery: <div>Discovery</div>,
  default: <HomeNav />,
};

const AppLayout = ({ children, state }) => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.innerWidth < 768 && window.scrollY > 100) {
      setShow(true);
    } else setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 custom-nav">
        <Link className="col-md-3 col-lg-2 me-0 px-3 logospace" to="/">
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
        <nav
          className={`navbar-expand custom-main-nav ${show && "nav-onscroll"}`}
        >
          <div className="container-fluid">
            <div className="collapse navbar-collapse ">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 leftnav">
                {/* <li className="nav-item">
                  <Link to="/" className="nav-link" type="button">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="tv" className="nav-link" type="button">
                    TV Shows
                  </Link>
                </li> */}
                {ENUM_STATES[state]}
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
      <div className="row">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block sidebar collapse"
        >
          <div className="position-sticky pt-3">
            <div>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "nav-link active"
                        : "nav-link"
                    }
                    aria-current="page"
                    to="/"
                  >
                    <HomeIcon />
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "nav-link active"
                        : "nav-link noactive"
                    }
                    to="/discovery"
                  >
                    <DiscoveryIcon />
                    Discovery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/community"
                  >
                    <CommunityIcon />
                    Community
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <CommingSoonIcon />
                    Comming Soon
                  </Link>
                </li>
              </ul>
              <hr className="line" />
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <RecentIcon />
                    Recent
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <BookmarkedIcon />
                    Bookmarked
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <TopratedIcon />
                    Top rated
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <DownloadIcon />
                    Download
                  </Link>
                </li>
              </ul>
              <hr className="line" />
              <div className="nav-item">
                <Link className="nav-link" to="#">
                  <LogoutIcon />
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="col-md-9 ms-sm-auto col-lg-10 p-0 main">{children}</div>
      </div>
    </>
  );
};

export default AppLayout;
