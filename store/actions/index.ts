import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';
import { Comments } from '../../interfaces/comments';

export function saveComment(comment: Comments) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export function changeAuth(isLoggedIn: boolean) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}
