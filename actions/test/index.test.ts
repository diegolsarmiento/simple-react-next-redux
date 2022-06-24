import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';

it('Testing Actions Index', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
});

it('Testing Action Types', () => {
    const action = saveComment('New Comment');
    expect(action.payload).toEqual('New Comment');
});