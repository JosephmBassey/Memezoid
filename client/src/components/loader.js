import React from 'react';
import { FaGrinSquintTears } from 'react-icons/fa';

const Loader = (props) => {
  return(
  <div className='LoaderStyle'>
    <h1><FaGrinSquintTears className='ico' /> Loading { props.type }...</h1>
  </div>
  );
}
export default Loader;