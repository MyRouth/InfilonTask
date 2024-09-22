import { SET_USERS } from './actions';

interface UserState {
  users: any[];
}

const initialState: UserState = {
  users: [],
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default userReducer;
