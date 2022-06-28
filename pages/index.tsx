import React from 'react';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';

const HomeComponent = () => {
  return(
      <Layout>
        <h1>Home</h1>
        <CommentList />
      </Layout>
  )
}

export default HomeComponent;
