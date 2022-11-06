import axios from 'axios';

const service = async (url, DTO) => {
  const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('app')).token;
  try {
    const res = await axios.delete(url, {
      body: JSON.stringify(DTO),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: bearer
      }
    });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default service;
