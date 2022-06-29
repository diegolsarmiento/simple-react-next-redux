import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { fetchContentApi, saveComment } from '../store/slices/comments';
import { bindActionCreators } from 'redux';
import CommentList from './CommentList';
// UI stuff
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Item from '@mui/material/ListItem';

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
            <form onSubmit={handleSubmit} role="box">
                <Item><h3>{title}</h3></Item>
                <Item><TextareaAutosize minRows={4} aria-label="text-comment" onChange={handleChange} value={comment} /></Item>
                <Item><Button type="submit">{buttonText}</Button></Item>
            </form>
            <Item>
                <Button aria-label="async-button" onClick={props.fetchContentApi}>Fetch Comments</Button>
            </Item>
            <CommentList />
        </div>
    )
}

const mapStateToProps = (state: any) => ({ comment: state.comment });
const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators ({saveComment, fetchContentApi}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);