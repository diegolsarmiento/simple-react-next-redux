
import type { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';
import { connect } from 'react-redux';

const Home: NextPage = () => {
  return (
      <Layout>
        <h1>Home</h1>
        <CommentList />
      </Layout>
  )
}

export default Home
