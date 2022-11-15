import {
  getAllPostsDataSource,
  getAllSpecificPostsDataSource,
} from '../../datasource/posts';
import { mapDTOToPosts } from './mapper';

export const getAllPostsRepository = async () => {
  const dto = await getAllPostsDataSource();
  return mapDTOToPosts(dto.data);
};

export const getAllSpecificPostsRepository = async (data) => {
  const dto = await getAllSpecificPostsDataSource(data);
  return mapDTOToPosts(dto.data);
};
