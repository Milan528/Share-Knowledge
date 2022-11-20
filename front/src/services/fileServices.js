import axios from 'axios';
import { axiosErrorLoger } from '../components/errorDialog/axiosErrorLogger';

//*************WORKING**************** */
// const request = async (method, url, DTO) => {
//   const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('app')).token;

//   return fetch(process.env.REACT_APP_BASE_URL + url, {
//     headers: {
//       Authorization: bearer,
//     },
//   })
//     .then((resp) => resp.blob())
//     // .then((response) => new File([response], 'fileName'))
//     .catch((err) => {
//       console.log(err + ': ' + url);
//       throw err;
//     });
// };

const request = async (method, url, DTO) => {
  const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('app')).token;

  try {
    const res = await axios({
      method: method,
      url: process.env.REACT_APP_BASE_URL + url,
      ...(DTO && { data: DTO }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: bearer,
      },
      responseType: 'blob',
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

const method = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
};

const fileServices = {
  get: async (url) => await request(method.get, url),
  post: async (url, DTO) => await request(method.post, url, DTO),
};

export default fileServices;
