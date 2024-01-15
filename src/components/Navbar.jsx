import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cl from './layout.module.css';
import bascket from '../img_ref/Bascket.svg';

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const activeStyle = {
    color: 'white',
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={cl.blockNav}>
      {isMobile && (
        <div className={cl.burgerIcon} onClick={toggleMenu}>
          ☰
        </div>
      )}

      <ul className={`${cl.ulNav} ${isMenuOpen && isMobile ? cl.active : ''}`}>
        <li className={cl.liNav}>
          <NavLink className={cl.linkNav} to={'/'} href='/' exact style={({ isActive }) => isActive ? activeStyle : undefined}>
            Main
          </NavLink>
        </li>
        <li className={cl.liNav}>
          <NavLink className={cl.linkNav} to={'/collection'} href='' style={({ isActive }) => isActive ? activeStyle : undefined}>
            Collection
          </NavLink>
        </li>
        <li className={cl.liNav}>
          <NavLink className={cl.linkNav} to={'/contact'} href='/me' style={({ isActive }) => isActive ? activeStyle : undefined}>
            Contact
          </NavLink>
        </li>
      </ul>

      <NavLink className={cl.bascket} to={'/bascket'} href='/me'>
        <img className={cl.bascketIcon} src={bascket} alt="bascket" />
      </NavLink>
    </div>
  );
};
