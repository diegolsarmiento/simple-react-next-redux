import React from 'react';
import Layout from '../components/Layout';
import CommentBox from '../components/CommentBox';
import { CommentInterface } from '../interfaces/comment';

const PostComponent = (props: CommentInterface) =>  {
  return(
    <Layout>
        <h1>Post</h1>
        <CommentBox {...props} />
    </Layout>
  )
}

export default PostComponent;
