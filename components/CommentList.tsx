import React from 'react';
import { CommentsInterface } from '../interfaces/comments';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from '../store/store';
import { getAuthState, changeAuth } from '../store/slices/auth';

class CommentList extends React.Component<{comments: CommentsInterface}, {comments: CommentsInterface}> {

    constructor(props: any){
        super(props);
    }

    renderList: any = (object: any) => {
        Object.keys(object).map((value: string, index: number) => {
            return <li key={index} aria-label="comment-list">{value}</li>
        });
    }

    renderComments: any = () => {
        if (this.props && this.props.comments) {
            this.renderList(this.props.comments);
        } else {
            let commts = [
                {comment: 'N/A', index: 1}
            ];
            this.renderList(commts);
        }
    }

    render() {
        return (
            <div>
                <h3>Comment List</h3>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

export default connect()(CommentList);