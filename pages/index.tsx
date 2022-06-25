import React from 'react';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';
import { CommentsInterface } from '../interfaces/comments';
import { connect } from 'react-redux';

class HomeComponent extends React.Component<{comments: CommentsInterface},{}> {

  constructor(props: any){
    super(props);
  }

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
