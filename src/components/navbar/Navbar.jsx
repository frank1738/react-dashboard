import { FaMoon } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { GoSun } from 'react-icons/go';
import { useContext } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useLocation } from 'react-router-dom';

import './Navbar.css';
import { SidebarContext } from '../../context/sidebarContext';
import { useThemeContext } from '../../context/themeContext';

const Navbar = () => {
  const { darkTheme, toggleTheme } = useThemeContext();
  const locations = {
    '/': 'Home',
    '/users': 'Users',
    '/transactions': 'Transactions',
    '/subscriptions': 'Subscriptions',
    '/loans': 'Loans',
    '/savings': 'Savings',
    '/account': 'Account',
    '/settings': 'Settings',
  };
  const { pathname } = useLocation();

  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <FiMenu size={25} color="var( --clr-white)" />
        </button>
        <h3 className="content-top-title">{locations[pathname]}</h3>
      </div>
      <div className="content-top-btns">
        {darkTheme ? (
          <GoSun
            size={25}
            onClick={toggleTheme}
            className="theme-icons"
            color="var( --clr-white)"
          />
        ) : (
          <FaMoon
            size={22}
            color="var( --clr-white)"
            onClick={toggleTheme}
            className="theme-icons"
          />
        )}
        <div className="notification-div">
          <IoMdNotificationsOutline
            size={26}
            color="var( --clr-white)"
            className="theme-icons"
          />
          <span>12</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
