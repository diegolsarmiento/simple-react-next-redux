import React from 'react';
import { CommentsInterface } from '../interfaces/comments';
import { connect, useSelector } from 'react-redux';
import { CommentInterface } from '../interfaces/comment';
import Item from '@mui/material/ListItem';

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
        <div>
            <Item><h3>Comment List</h3></Item>
            {renderComments()}
        </div>
    )
}

const mapStateToProps = (state: any) => ({ comments: state.comments });
export default connect(mapStateToProps)(CommentList);