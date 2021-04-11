import clientTypes from '../types/clientTypes';
import axios from 'axios';

const createClient = (client) => {
  return (dispatch) => {
    axios
      .post('http://localhost:3300/createClient', client)
      .then((res) => {
        if (res.data.error) {
          dispatch({
            type: clientTypes.CLIENT_ERROR,
            payload: res.data.error,
          });
        } else {
          dispatch({
            type: clientTypes.REGISTER,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export default createClient;
