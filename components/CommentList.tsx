import React from 'react';
import { CommentsInterface } from '../interfaces/comments';
import { connect } from 'react-redux';

class CommentList extends React.Component<CommentsInterface,any> {

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

const mapStateToProps = (state: any) => ({ comments: state.comments });

export default connect(mapStateToProps)(CommentList);