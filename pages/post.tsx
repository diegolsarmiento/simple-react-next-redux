import React from 'react';
import Layout from '../components/Layout';
import CommentBox from '../components/CommentBox';
import { CommentInterface } from '../interfaces/comment';

class PostComponent extends React.Component<CommentInterface,any> {

  render(){
    return(
      <Layout>
        <h1>Post</h1>
        <CommentBox {...this.props} />
      </Layout>
    )
  }
}

export default PostComponent;
