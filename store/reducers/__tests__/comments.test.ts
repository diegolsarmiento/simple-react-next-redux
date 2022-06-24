import { commentsReducer } from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('Comments Reducer Test',() => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'My new Comment'
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual(['My new Comment']);

});