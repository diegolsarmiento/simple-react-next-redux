import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types';
import { Comments } from '../../interfaces/comments';

export const commentsReducer = (state=[], action: any) => {
    switch(action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload];
        case FETCH_COMMENTS:
            let comments = action.payload.data?.map((comment: Comments) => {
                comment.name
            });
            return [...state, ...comments];
        default:
            return state;
    }
}