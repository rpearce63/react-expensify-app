import authReducer from '../../reducers/auth';

test('should log in user', () => {
    const uid = 'myUserId';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state.uid).toBe(uid);
}); 

test('should log out user', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: 'anything'}, action);
    expect(state).toEqual({});
});