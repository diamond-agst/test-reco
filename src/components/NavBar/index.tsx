import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className={styles.navbarWrapper}>
      <img src={logo} width={100} height={36} />
      <div className={styles.navLinks}>
        <Link to="/" className={location.pathname === "/" ? styles.active : ""}>Apps Discovery</Link>
        <Link to="/inventory" className={location.pathname === "/inventory" ? styles.active : ""}>Apps Inventory</Link>
        <Link to="/settings" className={location.pathname === "/settings" ? styles.active : ""}>Settings</Link>
      </div>
    </div>
  );
};

export default NavBar;
