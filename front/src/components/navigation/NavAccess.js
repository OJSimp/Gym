import { NavLink } from "react-router-dom";

const NavAccess = () => {
  return (
    <header className="nav--access">
      <NavLink
        to="log-in"
        className={({ isActive }) =>
          isActive ? "btn-text btn-text--active" : "btn-text btn-text--inactive"
        }
      >
        Log In
      </NavLink>
      <NavLink
        to="sign-up"
        className={({ isActive }) =>
          isActive ? "btn-text btn-text--active" : "btn-text btn-text--inactive"
        }
      >
        Sign Up
      </NavLink>
    </header>
  );
};

export default NavAccess;
