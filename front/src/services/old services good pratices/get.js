import axios from 'axios';

const service = async (url) => {
  const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('app')).token;
  try {
    const res = await axios.get(url, {
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
