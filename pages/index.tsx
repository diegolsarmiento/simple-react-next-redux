import React from 'react';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';
import { CommentsInterface } from '../interfaces/comments';

const HomeComponent = (props: CommentsInterface) => {
  return(
      <Layout>
        <h1>Home</h1>
        <CommentList {...props} />
      </Layout>
  )
}

export default HomeComponent;
