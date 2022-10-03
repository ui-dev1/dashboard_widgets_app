import {
  IS_AUTH,
} from '../actions/userActions';
import initialState from './initialState';

const userReducer = (state = initialState.user, { type, payload }) => {
  switch (type) {
    case IS_AUTH: {
      return {
        ...state,
        isAuth: payload
      };
    }
    default:
      return state;
  }
};

export default userReducer;
