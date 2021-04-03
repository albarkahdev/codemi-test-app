import {types} from '../../constants/auth';

const initialState = {
  user: {
    loading: false,
    data: {
      username: '',
    },
    token: null,
  },
};

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case types.REQUEST_LOGIN_LOADING:
      return {
        loading: true,
      };
    case types.REQUEST_LOGIN_SUCCESS:
      return {
        loading: false,
        data: {
          username: action.data.username,
        },
        token: action.data.token,
      };
    case types.REQUEST_LOGOUT:
      return initialState.user;
    default:
      return state;
  }
};

export default user;
