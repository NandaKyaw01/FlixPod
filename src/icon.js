import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Profile } from "./assets/profile.svg";
import { ReactComponent as Logout } from "./assets/logout.svg";
import { ReactComponent as Noti } from "./assets/noti.svg";
import { ReactComponent as Recent } from "./assets/recent.svg";
import { ReactComponent as Home } from "./assets/home.svg";
import { ReactComponent as Discovery } from "./assets/discover.svg";
import { ReactComponent as Community } from "./assets/community.svg";
import { ReactComponent as CommingSoon } from "./assets/soon.svg";
import { ReactComponent as Bookmarked } from "./assets/bookmark.svg";
import { ReactComponent as Toprated } from "./assets/toprated.svg";
import { ReactComponent as Download } from "./assets/download.svg";

import { ReactComponent as Imdb } from "./assets/IMDB_Logo_2016 1.svg";

export const LogoIcon = () => <Logo />;
export const HomeIcon = () => <Home />;
export const DiscoveryIcon = () => <Discovery />;
export const RecentIcon = () => <Recent />;
export const CommunityIcon = () => <Community />;
export const CommingSoonIcon = () => <CommingSoon />;
export const BookmarkedIcon = () => <Bookmarked />;
export const TopratedIcon = () => <Toprated />;
export const DownloadIcon = () => <Download />;
export const LogoutIcon = () => <Logout />;

export const ProfileIcon = () => <Profile className="noti" />;
export const NotiIcon = () => <Noti className="noti" />;

export const ImdbIcon = () => <Imdb className="imdb" />;
