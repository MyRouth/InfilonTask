import { fetchUsersApi } from './api'; 
import { FETCH_USERS, setUsers } from './actions';
import { Middleware } from 'redux';

const middleware: Middleware = store => next => async (action:any) => {
  if (action.type === FETCH_USERS) {
    try {
      const users = await fetchUsersApi(); 
      store.dispatch(setUsers(users)); 
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  }
  return next(action);
};

export default middleware;
