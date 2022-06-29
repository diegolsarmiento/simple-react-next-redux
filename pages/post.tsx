import React from 'react';
import Layout from '../components/Layout';
import CommentBox from '../components/CommentBox';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';

const PostComponent = () =>  {
  return(
    <Layout>
      <Stack spacing={1}>
        <Item><h1>Home</h1></Item>
        <CommentBox />
      </Stack>
    </Layout>
  )
}

export default PostComponent;
