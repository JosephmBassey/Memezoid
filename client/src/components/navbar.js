import React from 'react';
import { Link } from 'gatsby';
import { FaHome, FaSearch, FaArrowUp, FaHeart, FaUserAlt } from 'react-icons/fa';

const Navbar = (props) => {
  return(
  <div className='NavbarStyle'>
    <Link to='/feed' title='Home'><FaHome className='ico'/></Link>
    <Link to='/search' title='Search'><FaSearch className='ico'/></Link>
    <FaArrowUp onClick={ props.Popup } title='Upload' className='ico' />
    <Link to='/likes' title='Likes'><FaHeart className='ico'/></Link>
    <Link to='/profile/:id' title='Profile'><FaUserAlt className='ico'/></Link>
  </div>
  );
}
export default Navbar;