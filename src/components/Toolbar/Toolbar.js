import React from 'react';

import '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>test</div>
      <div className="toolbar__logo">
        <a href="/">The logo</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
