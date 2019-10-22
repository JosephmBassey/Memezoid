import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Content from '../components/content';

const Feed = () => {
  return(
  <Layout>
    <SEO title='Feed |' />
    <Content />
  </Layout>
  );
}
export default Feed;