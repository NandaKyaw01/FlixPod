import React, { useEffect, useState } from "react";
import { CommingSoonIcon, LogoIcon, NotiIcon, ProfileIcon } from "../icon";
import { Link, NavLink, Navigate, useLocation } from "react-router-dom";
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
import AuthService from "../services/authService";

const HomeNav = () => {
  const param = useLocation().pathname;
  return (
    <>
      <li className="nav-item">
        <NavLink
          to={"/"}
          className={param.includes("/movie") ? "nav-link active" : "nav-link"}
          type="button"
        >
          Movies
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/tv"
          className={param.includes("/tv") ? "nav-link active" : "nav-link"}
          type="button"
        >
          TV Shows
        </NavLink>
      </li>
    </>
  );
};

const NavLoginSignup = () => {
  return (
    <>
      <Link to="/login">
        <button type="button" className="btn btn-secondary">
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button type="button" className="btn btn-link">
          Signup
        </button>
      </Link>
    </>
  );
};

const NavUsernameEmail = ({ data }) => {
  const { username, email } = data;
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 profile">
      <li className="nav-item noti">
        <NotiIcon />
      </li>
      <li className="nav-item">
        <ProfileIcon />
      </li>
      <li className="nav-item name">
        <a className="nav-link name" href="#">
          {username}
        </a>
        <a className="nav-link email" href="#">
          {email}
        </a>
      </li>
    </ul>
  );
};

const ENUM_STATES = {
  home: <HomeNav />,
  discovery: <div>Discovery</div>,
  default: <HomeNav />,
};

const AppLayout = ({ children, state }) => {
  const param = useLocation().pathname;
  const [show, setShow] = useState(false);

  // const [redirect, setRedirect] = useState(null);
  const [currentUser, setCurrentUser] = useState({ username: "", email: "" });
  const [userReady, setUserReady] = useState(false);

  useEffect(() => {
    const current = AuthService.getCurrentUser();
    if (current) {
      setCurrentUser({ username: current.username, email: current.email });
      setUserReady(true);
    }
  }, []);

  const controlNavbar = () => {
    if (window.innerWidth < 768) {
      setShow(window.scrollY > 0);
    } else setShow(false);
  };

  const handleLogout = () => {
    AuthService.logout();
    window.location.reload();
    setUserReady(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [show]);

  // if (redirect) {
  //   return <Navigate to={redirect} />;
  // }

  return (
    <>
      <header className="navbar navbar-dark fixed-top flex-md-nowrap p-0 custom-nav">
        <Link className="col-md-3 col-lg-2 px-3 logospace" to="/">
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
                {ENUM_STATES[state]}
              </ul>
              <span className="navbar-text d-none d-lg-block">
                {userReady ? (
                  <NavUsernameEmail data={currentUser} />
                ) : (
                  <NavLoginSignup />
                )}
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
                    className={({ isActive }) =>
                      param.includes("/tv") |
                      param.includes("/movie") |
                      isActive
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
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "nav-link active"
                        : "nav-link noactive"
                    }
                    to="/bookmarks"
                  >
                    <BookmarkedIcon />
                    Bookmarks
                  </NavLink>
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
              {userReady && (
                <>
                  <hr className="line" />
                  <div className="nav-item">
                    <Link className="nav-link" onClick={handleLogout}>
                      <LogoutIcon />
                      Logout
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
        <div className="col-md-9 col-lg-10 ms-sm-auto main">{children}</div>
      </div>
    </>
  );
};

export default AppLayout;
