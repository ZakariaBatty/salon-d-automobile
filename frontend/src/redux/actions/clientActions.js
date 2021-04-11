import clientTypes from '../types/clientTypes';
import axios from 'axios';
import { saveClientTolocalStorage, isLogged } from '../../helpers/auth';

export const createClient = (client) => {
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
          saveClientTolocalStorage(res.data);
          dispatch({
            type: clientTypes.REGISTER,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const login = (client) => {
  return (dispatch) => {
    axios
      .post('http://localhost:3300/singin', client)
      .then((res) => {
        if (res.data.error) {
          dispatch({
            type: clientTypes.CLIENT_ERROR,
            payload: res.data.error,
          });
        } else {
          dispatch({
            type: clientTypes.AUTH,
            payload: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const authCheck = (req, res) => {
  return (dispatch) => {
    dispatch({
      type: clientTypes.CHECK_AUTH,
      payload: isLogged() ? { user: isLogged().user } : null,
    });
  };
};
