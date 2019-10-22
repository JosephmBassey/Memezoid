import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';

const NotFound = () => {
  return(
  <Layout>
    <SEO title='404: Not found! |' />
    <div className='ErrStyle'>
      <h1>404: Not found!</h1>
      <p>You just hit a route that doesn't exist...</p>
    </div>
  </Layout>
  );
}
export default NotFound;