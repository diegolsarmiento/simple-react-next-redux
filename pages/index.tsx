import React from 'react';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';
import { CommentsInterface } from '../interfaces/comments';

class HomeComponent extends React.Component<CommentsInterface,any> {

  render(){
    return(
      <Layout>
        <h1>Home</h1>
        <CommentList {...this.props} />
      </Layout>
    )
  }
}

export default HomeComponent;
