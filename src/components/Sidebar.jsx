import { Link } from "react-router-dom";
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

const Sidebar = ({ pageid }) => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block sidebar collapse custom=sidebar"
    >
      <div className="position-sticky pt-3">
        <div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <HomeIcon />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/discovery">
                <DiscoveryIcon />
                Discovery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <CommunityIcon />
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <CommunityIcon />
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
  );
};

export default Sidebar;
