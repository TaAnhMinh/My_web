import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../../styles/common/Navbar.module.scss';
import logo from '../../../assets/PersonalLogo.jpg';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="TAM Logo" className={styles.logo} />
      </div>
      <div className={styles.links}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          Home
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;