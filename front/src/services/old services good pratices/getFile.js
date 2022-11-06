const service = async (url) => {
  const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('app')).token;

  return fetch(url, {
    headers: {
      Authorization: bearer
    }
  })
    .then((resp) => resp.blob())
    .then((response) => new File([response], 'fileName'))
    .catch((err) => {
      console.log(err + ': ' + url);
      throw err;
    });
};

export default service;
