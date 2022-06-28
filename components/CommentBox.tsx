import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../store/slices/comment';
import { fetchContentApi } from '../store/slices/comments';

const CommentBox = () => {
    const title = 'Add comment';
    const buttonText = 'Submit Comment';
    const [comment, setComment] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        saveComment(comment);
        setComment(comment);
    }
    
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit} role="box">
                    <h4>{title}</h4>
                    <textarea aria-label="text-comment" onChange={handleChange} value={comment} />
                    <div>
                        <button>{buttonText}</button>
                    </div>
                </form>
                <button aria-label="async-button" onClick={fetchContentApi}>Fetch Comments</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({ comment: state.comment });
export default connect(mapStateToProps)(CommentBox);