import React from 'react';
import { CommentsInterface } from '../interfaces/comments';
import { connect } from 'react-redux';

const renderList: any = (object: any) => {
    Object.keys(object).map((value: string, index: number) => {
        return <li key={index} aria-label="comment-list">{value}</li>
    });
}

const renderComments: any = (props: CommentsInterface) => {
    if (props && props.comments) {
        renderList(props.comments);
    } else {
        let commts = [
            {comment: 'N/A', index: 1}
        ];
        renderList(commts);
    }
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