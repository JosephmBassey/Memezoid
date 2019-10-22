import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';

const NotFound = () => {
  return(
  <Layout>
    <SEO title='404: Not found! |' />
    <h1>NOT FOUND!</h1>
    <p>You just hit a route that doesn't exist...</p>
  </Layout>
  );
}
export default NotFound;