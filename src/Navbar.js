import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          idk
        </Link>

        <ul className="nav-links">
          <CustomLink to="/Login">Login</CustomLink>
          <CustomLink to="/Signup">Signup</CustomLink>
        </ul>
      </nav>
    </>
  );

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }
};
