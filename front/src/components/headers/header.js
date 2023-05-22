import "./header.scss";

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  //

  const [menuDisplay, setMenuDisplay] = useState(0);

  return (
    <>
      <header className="header--mobile">
        <nav className="header__nav">
          <NavLink className="logo" to="/">
            CULT
          </NavLink>
          <div className="header__buttons--mobile">
            <button
              className="btn-icon"
              onClick={() => {
                setMenuDisplay(1);
              }}
            >
              <svg
                className="icon--button"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_58)">
                  <path
                    d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                    fill="#323232"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_58">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </nav>
      </header>
      {/* Navigation Menu */}
      <nav
        className={
          menuDisplay === 0 ? "nav-menu--mobile hide" : "nav-menu--mobile"
        }
      >
        <header className="header--mobile">
          <div className="header__nav">
            <NavLink
              className="logo"
              to="/"
              onClick={() => {
                setMenuDisplay(0);
              }}
            >
              CULT
            </NavLink>
            <div className="header__buttons--mobile">
              <button
                className="btn-icon"
                onClick={() => {
                  setMenuDisplay(0);
                }}
              >
                <svg
                  className="icon--button"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_40_54)">
                    <path
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                      fill="#1E1E1E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_40_54">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </header>
        {/* Header Navigation Links */}
        <ul className="header__nav-links">
          <Link
            onClick={() => {
              setMenuDisplay(0);
            }}
            className="nav__link--moblie"
            to="/"
          >
            <span> Home </span>
            <span> - "/" </span>
          </Link>
          <Link
            onClick={() => {
              setMenuDisplay(0);
            }}
            className="nav__link--moblie"
            to="/"
          >
            <span> Home </span>
            <span> - "/" </span>
          </Link>
          <Link
            onClick={() => {
              setMenuDisplay(0);
            }}
            className="nav__link--moblie"
            to="/"
          >
            <span> Home </span>
            <span> - "/" </span>
          </Link>
          <Link
            onClick={() => {
              setMenuDisplay(0);
            }}
            className="nav__link--moblie"
            to="/"
          >
            <span> Home </span>
            <span> - "/" </span>
          </Link>
        </ul>

        <div className="user-logged-out">
          <NavLink
            className="logo"
            to="access/sign-up"
            onClick={() => {
              setMenuDisplay(0);
            }}
          >
            Sign Up
          </NavLink>
          <NavLink
            className="logo"
            to="access/sign-up"
            onClick={() => {
              setMenuDisplay(0);
            }}
          >
            Log In
          </NavLink>
        </div>
        <button>LOG OUT</button>
        <div className="user-logged-in"></div>
      </nav>
    </>
  );
};

export default Header;
