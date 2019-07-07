import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = () => {
  return (
    <div>
    <AppBar position="static">
        <Toolbar>
        <div className="nav-wrapper">
        <Link
          to={'/'}
          className="left logo"
        >
          Car Lovers
        </Link>
        <ul className="right">
          <li>
            <a className="search" href="/search">Search</a>
          </li>
        </ul>
      </div>
        </Toolbar>
    </AppBar>
    </div>
  );
};

export default Header;
