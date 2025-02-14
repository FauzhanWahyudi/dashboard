import Link from "next/link";
import BerandaIcon from "./accessories/sidebar-icons/beranda-icon";
import VideflyIcon from "./accessories/sidebar-icons/videfly-icon";
import NavbarNotif from "./accessories/navbar-icons/navbar-notif";
import CoinIcon from "./accessories/navbar-icons/coin-icon";
import ProfileBadge from "./accessories/navbar-icons/profile-badge";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      {/* Left Section */}
      <div className="navbar-left">
        {/* Logo */}
        <VideflyIcon />

        {/* Navbar Button */}
        <Link href={"#"} className="navbar-item">
          <BerandaIcon className="navbar-icon" />
          <span className="navbar-text">Beranda</span>
        </Link>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        {/* Notification */}
        <NavbarNotif />

        {/* Profile with Coins */}
        <div className="navbar-profile">
          <div className="navbar-profile-coins">
            <CoinIcon />
            <span className="navbar-profile-text">5 Koin</span>
          </div>
          <div className="relative">
            <img
              src="/images/Ellipse 2.png"
              alt="Profile"
              className="navbar-profile-image"
            />
            <ProfileBadge className={"navbar-profile-badge"} />
          </div>
        </div>
      </div>
    </nav>
  );
}
