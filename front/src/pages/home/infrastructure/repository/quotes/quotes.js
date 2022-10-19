import { getAllQuotesDataSource } from "../../datasource/quote/quote";
import { mapperQuotesDTOToModel } from "./mapper";

export const getAllQuotesRepository = async () => {
  const quotesDTO = await getAllQuotesDataSource();
  return mapperQuotesDTOToModel(quotesDTO);
};
