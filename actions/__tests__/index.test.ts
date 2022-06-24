import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';

it('Testing Actions Index', () => {
    const comment = {
        name: 'test 1'
    };
    const action = saveComment(comment);
    expect(action.type).toEqual(SAVE_COMMENT);
});

it('Testing Action Types', () => {
    const comment = {
        name: 'test 2'
    };
    const action = saveComment(comment);
    expect(action.payload).toEqual({
        name: 'test 2'
    });
});