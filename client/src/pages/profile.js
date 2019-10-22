import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Swal from 'sweetalert2';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Content from '../components/content';
import { FaImages, FaPlay, FaUndo } from 'react-icons/fa';

const Profile = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos').then(res => {
      return res.json();
    }).then(data => {
      setPosts(data.slice(0, 1));
    }).catch(err => {
      Swal.fire({
        title: 'Error!',
        text: `Oh no something happened while fetching your profile! ${ err }`,
        type: 'error'
      });
    });
  }, []);
  return(
  <Layout>
    {/* Will change to username later for SEO component */}
    <SEO title='Profile |' />
    <div className='ProfileStyle'>
      {posts.map(post => (<div>
        <div style={{ backgroundImage: `url('https://source.unsplash.com/Ekz6aAdZnkM')` }} className='banner'>
          <ul>
            <img src={ post.url } alt={ post.title } className='userImage' />
            <h1>Bvlktech</h1>
            <p>Followers: { post.id } &bull; Following: { post.id }</p>
          </ul>
        </div>
        <div className='navbar'>
          <Link to='/profile/:id' title={ post.id }><FaImages className='ico' /> Images</Link>
          <Link to='/profile/:id/videos' title={ post.id }><FaPlay className='ico' /> Videos</Link>
          <Link to='/profile/:id/gifs' title={ post.id }><FaUndo className='ico' /> Gifs</Link>
          <button className='followBtn'>Follow</button>
        </div>
      </div>))}
    </div>
    <Content />
  </Layout>
  );
}
export default Profile;