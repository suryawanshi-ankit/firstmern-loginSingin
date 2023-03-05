import { getToken } from "./cookies";
import axios from 'axios';
import { BASE_URL } from './constant';

export const getUserDetails = async () => {
  try {
    const token = getToken();
    const res = await axios({
      method: 'get',
      url: `${BASE_URL}about`,
      headers: {
        'Autth-token': token
      }
    })
    if (res.status !== 200) {
       const error = new Error(new Error);
       throw error;
    }
    return res.data;
    
  } catch (error) {
    return error;
  }
}
