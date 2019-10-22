import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Loader from './loader';

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos').then(res => {
      return res.json();
    }).then(data => {
      setPosts(data.slice(0, 10));
      setLoading(false);
    }).catch(err => {
      Swal.fire({
        title: 'Error!',
        text: `Oh no something happened while fetching posts! ${ err }`,
        type: 'error'
      });
    });
  }, []);
  return(
  <div className='ContentStyle'>
    {loading ? <Loader type='Posts' /> : <div className='masonary'>
      {posts.map(post => (<div key={ post.id } className='card'>
        <div className='authorBar'>
          <img src={ post.url } alt={ post.title } className='authorImage' />
          <p>{ post.id }</p>
        </div>
        <img src={ post.thumbnailUrl } alt={ post.title } className='cardImage' />
        <div className='dis'>
          <p>{ post.title }</p>
        </div>
      </div>))}
    </div>}
  </div>
  );
}
export default Content;