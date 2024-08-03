import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './sidebar.css';
import { useContext } from 'react';

import { personsImgs } from '../../utils/images';
import { SidebarContext } from '../../context/sidebarContext';
import { navigationLinks } from '../../data/data';

const Sidebar = () => {
  const [sidebarClass, setSidebarClass] = useState('');
  const { isSidebarOpen } = useContext(SidebarContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_five} alt="profile image" />
        </div>
        <span className="info-name">Botus tech</span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => {
            const IconComponent = navigationLink.icon;
            return (
              <li className="nav-item" key={navigationLink.id}>
                <Link
                  to={navigationLink.url}
                  className={classNames('nav-link', {
                    active: pathname === navigationLink.url,
                  })}
                >
                  <IconComponent size={18} color="var( --clr-white)" />
                  <span className="nav-link-text">{navigationLink.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
