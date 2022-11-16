import axios from 'axios';

const service = async (url, DTO) => {
  const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('app')).token;
  try {
    const res = await axios.post(url, {
      body: DTO,
      headers: {
        Authorization: bearer
      }
    });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default service;
