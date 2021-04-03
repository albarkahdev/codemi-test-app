import {types} from '../../constants/auth';

export const WAIT = delay => new Promise(resolve => setTimeout(resolve, delay));

export const requestLogin = ({username, password}) => {
  return dispatch => {
    dispatch({type: types.REQUEST_LOGIN_LOADING});
    WAIT(3000).then(() => {
      dispatch({
        type: types.REQUEST_LOGIN_SUCCESS,
        data: {
          username,
          token: 'fakeToken',
        },
      });
    });
  };
};

export const requestLogout = () => {
  return {type: types.REQUEST_LOGOUT};
};
