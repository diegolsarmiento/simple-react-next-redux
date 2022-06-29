import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { fetchContentApi, saveComment } from '../store/slices/comments';
import { bindActionCreators } from 'redux';
import CommentList from './CommentList';

const CommentBox = (props: any) => {
    const title = 'Add comment';
    const buttonText = 'Submit Comment';
    const [comment, setComment] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setComment(comment);
        props.saveComment(comment);
        //clean it
        setComment('');
    }
    
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit} role="box">
                    <h3>{title}</h3>
                    <textarea aria-label="text-comment" onChange={handleChange} value={comment} />
                    <div>
                        <button>{buttonText}</button>
                    </div>
                </form>
                <ul>
                    <li><button aria-label="async-button" onClick={props.fetchContentApi}>Fetch Comments</button></li>
                    <li><CommentList /></li>
               </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({ comment: state.comment });
const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators ({saveComment, fetchContentApi}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);