import React from 'react';
import './styles/main.scss';
import Topbar from './topbar';

const Layout = ({ children }) => {
  return(
  <main>
    <Topbar />
    { children }
  </main>
  );
}
export default Layout;