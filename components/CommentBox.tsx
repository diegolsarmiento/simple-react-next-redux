import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { fetchContentApi, saveComment } from '../store/slices/comments';
import { bindActionCreators } from 'redux';
import CommentList from './CommentList';
// UI stuff
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const CommentBox = (props: any) => {
    const title = 'Add comment';
    const buttonText = 'Submit Comment';
    const [comment, setComment] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(comment){
            setComment(comment);
            props.saveComment(comment);
            //clean it
            setComment('');
        }
    }
    
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    }

    return(
        <form onSubmit={handleSubmit} role="box">
            <Box sx={{ backgroundColor: '#eaeaea', margin: 0 }}>
                <Stack spacing={0}>
                    <Item><h3>{title}</h3></Item>
                    <Item><TextareaAutosize minRows={4} aria-label="text-comment" onChange={handleChange} value={comment} /></Item>
                    <Item><Button type="submit">{buttonText}</Button></Item>
                </Stack>
                <Divider />
                <Stack spacing={0}>
                    <Item><Button aria-label="async-button" onClick={props.fetchContentApi}>Fetch Comments</Button></Item>
                    <CommentList />
                </Stack>
            </Box>
        </form>
    )
}

const mapStateToProps = (state: any) => ({ comment: state.comment });
const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators ({saveComment, fetchContentApi}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);