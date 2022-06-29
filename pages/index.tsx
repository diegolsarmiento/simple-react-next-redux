import React from 'react';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';

const HomeComponent = () => {
  return(
      <Layout>
        <Stack spacing={1}>
          <Item><h1>Home</h1></Item>
        </Stack>
        <CommentList />
      </Layout>
  )
}

export default HomeComponent;
