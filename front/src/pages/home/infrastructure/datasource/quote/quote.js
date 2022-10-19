import urlBuilder from "../../../../../services/urlBuilder";
import * as quoteServices from "../../../../../services/quote";

export const getAllQuotesDataSource = async () => {
  return await quoteServices.getAllQuotes(urlBuilder.base_url("/quotes"));
};
