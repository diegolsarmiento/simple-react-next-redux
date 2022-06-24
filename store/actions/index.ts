
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';
import { Comments } from '../../interfaces/comments';

export const saveComment = (comment: Comments) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export const fetchComments = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/comments');
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export const changeAuth = (isLoggedIn: boolean) => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}
