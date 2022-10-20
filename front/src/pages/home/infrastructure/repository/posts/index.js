import { getAllPostsDataSource } from "../../datasource/posts";
import { mapDTOToPosts } from "./mapper";

export const getAllPostsRepository = async () => {
  const dto = await getAllPostsDataSource();
  mapDTOToPosts(dto);
  console.log(dto);
  // return mapperQuotesDTOToModel(quotesDTO);
};
