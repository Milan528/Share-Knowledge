const base_url = (url) => "http://localhost:3000" + url;

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
