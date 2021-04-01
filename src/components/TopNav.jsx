import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const routes = ["about", "resume", "collection", "contact"];

const TopNav = () => {
  const [collapsed, setCollapse] = React.useState(true);

  const handleToggle = () => {
    setCollapse(!collapsed);
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div class="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Xiaoran Xu
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded={!collapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>
        <div
          class={(collapsed ? "collapse " : "") + "navbar-collapse"}
          id="navbarColor01"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {routes.map((route) => (
              <li className="nav-item">
                <NavLink className="nav-link" to={"/" + route}>
                  {route}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
