import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types'


describe('Test in authReducer', () => {
    test('should return state default', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('should authenticate', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Juanga',
            }
        };

        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({
            logged: true,
            name: 'Juanga'
        });
    });


    test('should delete user name and logged in false', () => {
        const action = {
            type: types.logout,
        };

        const state = authReducer({ logged: true, name: 'Juanga' }, action);
        expect(state).toEqual({ logged: false });
    });
});
