import React from 'react';
import { CommentsInterface } from '../interfaces/comments';
import { connect, useSelector } from 'react-redux';
import { CommentInterface } from '../interfaces/comment';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';
import Box from '@mui/material/Box';

const renderList: any = (stateArray: CommentsInterface) => {
    const list = stateArray.comments.map((value: CommentInterface, index: number) => {
        return <Item key={index} aria-label="comment-list">{value?.name}</Item>;
    })
   return list;
}

const renderComments: any = () => {
    const stateArray = useSelector((state: CommentsInterface) => state.comments);
    return renderList(stateArray);
}

const CommentList = () => {
    return (
        <Box sx={{ backgroundColor: '#eaeaea', margin: 1 }}>
            <Stack spacing={1}>
                <Item><h3>Comments</h3></Item>
                {renderComments()}  
            </Stack>    
        </Box>
    )
}

const mapStateToProps = (state: any) => ({ comments: state.comments });
export default connect(mapStateToProps)(CommentList);