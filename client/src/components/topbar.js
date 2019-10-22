import React from 'react';
import { Link } from 'gatsby';
import { FaArrowUp, FaUserAlt } from 'react-icons/fa';

const Topbar = (props) => {
  return(
  <div className='TopbarStyle'>
    <Link to='/feed' title='Memezoid' className='logo'>Memezoid</Link>
    <form action='/search' method='GET'>
      <input type='text' placeholder='Search...' maxLength='100' className='search' />
    </form>
    <div className='right'>
      <FaArrowUp onClick={ props.Popup } title='Upload' className='ico' />
      <Link to='/profile/:id' title='View Profile'><FaUserAlt className='ico'/></Link>
    </div>
  </div>
  );
}
export default Topbar;