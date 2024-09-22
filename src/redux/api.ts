import axios from 'axios';

export const fetchUsersApi = async () => {
  const response = await axios.get('https://reqres.in/api/users?page=1');
  return response.data.data; 
};
