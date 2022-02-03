import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Test in authReducer', () => {
    test('should do login', () => {
        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Juanga'
            }
        };

        const state = authReducer(initState, action);

        expect(state).toEqual({
            uid: 'abc',
            name: 'Juanga'
        })
    });

    test('should do logout', () => {
        const initState = {
            uid: 'jagdfjahdsf127362718',
            name: 'Juanga'
        };

        const action = {
            type: types.logout,
        };

        const state = authReducer(initState, action);

        expect(state).toEqual({});
    });

    test('not should change in state', () => {
        const initState = {
            uid: 'jagdfjahdsf127362718',
            name: 'Juanga'
        };

        const action = {
            type: 'asdjkasd',
        };

        const state = authReducer(initState, action);

        expect(state).toEqual(initState);
    });
});
