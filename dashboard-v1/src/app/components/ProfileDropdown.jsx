"use client";
import Link from "next/link";
import CoinIcon from "./accessories/navbar-icons/coin-icon";
import ProfileBadge from "./accessories/navbar-icons/profile-badge";
import { useState } from "react";

export default function ProfileDropdown({ username, coins }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="relative">
        <img
          src="/images/Ellipse 2.png"
          alt="Profile"
          className="navbar-profile-image cursor-pointer"
        />
        <ProfileBadge className="navbar-profile-badge" />
      </div>
      {isOpen && (
        <div
          className={
            "absolute right-0 z-20 mt-2 w-48 rounded-md bg-white shadow-lg"
          }
        >
          <div className="p-4">
            <p className="font-medium text-gray-700">{username}</p>
            <div className="flex items-center gap-2">
              <CoinIcon />
              <span className="text-gray-700">{coins} Koin</span>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <Link href="/profile" className="navbar-profile-dropdown-text">
              Profile
            </Link>
            <Link href="/" className="navbar-profile-dropdown-text">
              Aset
            </Link>
            <Link href="/logout" className="navbar-profile-dropdown-text">
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
