const base_url = (url) => process.env.REACT_APP_BASE_URL + url;

const withURLSearchParams = (url, paramsDTO) => {
  return base_url(url) + "?" + new URLSearchParams(paramsDTO);
};

const urlWithSignleParam = (url, param) => {
  return base_url(url) + param;
};

const urlWithMultipleParams = (url, ...params) => {
  return base_url(url) + params.join("");
};

const urlBuilder = {
  base_url,
  withURLSearchParams,
  urlWithSignleParam,
  urlWithMultipleParams,
};

export default urlBuilder;
