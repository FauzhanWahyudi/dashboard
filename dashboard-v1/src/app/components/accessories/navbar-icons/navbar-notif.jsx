"use client";
import { useState, useEffect } from "react";

export default function NavbarNotif() {
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimation((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="navbar-notification">
      <svg
        width="17"
        height="19"
        viewBox="0 0 17 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.60413 14.463V15.3889C5.60413 16.1256 5.90044 16.8321 6.42789 17.3531C6.95533 17.874 7.6707 18.1667 8.41663 18.1667C9.16255 18.1667 9.87792 17.874 10.4054 17.3531C10.9328 16.8321 11.2291 16.1256 11.2291 15.3889V14.463M6.54163 3.35185C6.54163 2.86071 6.73917 2.38968 7.0908 2.04239C7.44243 1.69511 7.91934 1.5 8.41663 1.5C8.91391 1.5 9.39082 1.69511 9.74245 2.04239C10.0941 2.38968 10.2916 2.86071 10.2916 3.35185C11.3683 3.85465 12.2861 4.63734 12.9467 5.61602C13.6073 6.5947 13.9858 7.73248 14.0416 8.90741V11.6852C14.1122 12.2608 14.3186 12.8121 14.6443 13.2946C14.9699 13.777 15.4057 14.1772 15.9166 14.463H0.916626C1.42751 14.1772 1.86332 13.777 2.18899 13.2946C2.51466 12.8121 2.72107 12.2608 2.79163 11.6852V8.90741C2.84746 7.73248 3.22597 6.5947 3.88658 5.61602C4.54719 4.63734 5.46499 3.85465 6.54163 3.35185Z"
          stroke="#111336"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className={`absolute right-0 top-0 transform ${
          isAnimation ? "scale-125" : "scale-100"
        } transition-transform duration-300`}
        width="9"
        height="8"
        viewBox="0 0 9 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4.5" cy="4" r="3.5" fill="#E94057" stroke="white" />
      </svg>
    </div>
  );
}
