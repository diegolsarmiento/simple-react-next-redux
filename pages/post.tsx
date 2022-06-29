import React from 'react';
import Layout from '../components/Layout';
import CommentBox from '../components/CommentBox';

const PostComponent = () =>  {
  return(
    <Layout>
        <h1>Post</h1>
        <CommentBox/>
    </Layout>
  )
}

export default PostComponent;
