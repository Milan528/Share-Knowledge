import axios from 'axios';

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
    if (error.response) {
      console.log(
        `Request made, but the server responded with an error, check response.data `,
        error
      );
      throw `Request made, but the server responded with an error: ${error.response.data.message}.`;
    } else if (error.request) {
      console.log(
        `Request made but no response is received from the server, check response.request `,
        error
      );
      throw `Request made but no response is received from the server. `;
    } else {
      console.log(error);
      throw `Error occured while setting up the request`;
    }
  }
};

export default service;
