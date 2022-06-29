import React from 'react';
import { CommentsInterface } from '../interfaces/comments';
import { connect, useSelector } from 'react-redux';
import { CommentInterface } from '../interfaces/comment';

const renderList: any = (stateArray: CommentsInterface) => {
    const list = stateArray.comments.map((value: CommentInterface, index: number) => {
        return <li key={index} aria-label="comment-list">{value?.name}</li>;
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
            <h3>Comment List</h3>
            <ul>
                {renderComments()}
            </ul>
        </div>
    )
}

const mapStateToProps = (state: any) => ({ comments: state.comments });
export default connect(mapStateToProps)(CommentList);