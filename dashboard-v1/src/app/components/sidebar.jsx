"use client";
import AI_Tools_Icon from "./accessories/sidebar-icons/ai-tools-icon";
import AsetIcon from "./accessories/sidebar-icons/aset-icon";
import AvatarIcon from "./accessories/sidebar-icons/avatar-icon";
import BerandaIcon from "./accessories/sidebar-icons/beranda-icon";
import BrandKitIcon from "./accessories/sidebar-icons/brand-kit-icon";
import InspirasiIcon from "./accessories/sidebar-icons/Inspirasi-icon";
import KalenderIcon from "./accessories/sidebar-icons/kalender-icon";
import VideflyText from "./accessories/sidebar-icons/videfly-text";
import VideoIcon from "./accessories/sidebar-icons/video-icon";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label: "Beranda", icon: <BerandaIcon />, link: "/" },
  { label: "Video", icon: <VideoIcon />, link: "/" },
  { label: "Avatar", icon: <AvatarIcon />, link: "/", disabled: true },
  { label: "AI Tools", icon: <AI_Tools_Icon />, link: "/" },
  { label: "Inspirasi", icon: <InspirasiIcon />, link: "/" },
  { label: "Aset", icon: <AsetIcon />, link: "/" },
  { label: "Brand Kit", icon: <BrandKitIcon />, link: "/" },
  { label: "Kalender", icon: <KalenderIcon />, link: "/" },
];

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sidebar-toggle-button"
      >
        {isOpen ? "X" : "☰"}
      </button>
      <div
        className={
          (isOpen ? "translate-x-0" : "-translate-x-full") +
          " " +
          "sidebar-container lg:translate-x-0"
        }
      >
        <div className="sidebar-header">
          <VideflyText />
        </div>
        <nav>
          <ul className="space-y-4">
            {/* sidebar options */}
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.label === "Video" ? (
                  <p className="sidebar-divider">Buat Konten</p>
                ) : (
                  item.label === "Aset" && (
                    <p className="sidebar-divider">Kelola</p>
                  )
                )}
                {/* sidebar button */}
                <Link
                  href={item.link}
                  className={`sidebar-item ${
                    item.disabled ? "sidebar-item-disabled" : ""
                  } ${item.label === "Beranda" ? "pt-8" : ""}`}
                >
                  <div className="focus:animate-bounce">{item.icon}</div>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
