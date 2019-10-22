import React from 'react';
import './styles/main.scss';
import Topbar from './topbar';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return(
  <main>
    <Topbar />
    <Navbar />
    { children }
  </main>
  );
}
export default Layout;