import axios from 'axios';
import { axiosErrorLoger } from '../components/errorDialog/axiosErrorLogger';

const service = async (url, DTO) => {
  const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('app')).token;
  try {
    const res = await axios.post(url, {
      params: DTO,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: bearer,
      },
    });
    return res.data;
  } catch (error) {
    axiosErrorLoger(error);
    if (error.response) {
      throw new Error(
        `Request made, but the server responded with an error: ${error.response.data.message}.`
      );
    } else if (error.request) {
      throw new Error(
        `Request made but no response is received from the server. `
      );
    } else {
      throw new Error(`Error occured while setting up the request`);
    }
  }
};

export default service;
