export const addUrlSearchParams = (url, paramsDTO) => {
  return url + '?' + new URLSearchParams(paramsDTO);
  //func call:  urlBuilder.withURLSearchParams('/quotes', {page: 1, pageSize: 5})
  //func result: /quotes?page=1&pageSize=5
};

export const addUrlParams = (...params) => {
  return params.join('');
  //func call: urlBuilder.urlWithMultipleParams('/quotes', `/${id}`, '/upvote')
  //func result: /quotes/147dc7ad-e752-4f7c-9d4d-1bf41153001e/upvote
};

//*************************************EXAMPLES**********************************/
// [
// 	{
// 		"url": "http://localhost:3000/quotes",
// 		"method": "GET"
// 	},
// 	{
// 		"url": "http://localhost:3000/quotes?tags=life,science&page=1&pageSize=1&sortBy=author&sortDirection=asc",
// 		"method": "GET"
// 	},
// 	{
// 		"url": "http://localhost:3000/quotes/147dc7ad-e752-4f7c-9d4d-1bf41153001e",
// 		"method": "GET"
// 	},
// 	{
// 		"url": "http://localhost:3000/quotes",
// 		"method": "POST"
//    "data": {...} //"data" for axios, "body" for fetch
// 	},
// 	{
// 		"url": "http://localhost:3000/quotes/147dc7ad-e752-4f7c-9d4d-1bf41153001e/upvote",
// 		"method": "POST"
//    "data": undefined //"data" for axios, "body" for fetch
// 	},
// ]
