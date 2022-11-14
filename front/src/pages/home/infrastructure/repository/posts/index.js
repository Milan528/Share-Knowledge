import {
  getAllPostsDataSource,
  getAllSpecificPostsDataSource,
} from '../../datasource/posts';
import { mapDTOToPosts } from './mapper';
import httpStatusChecker from '../../../../../services/httpStatusChecker';

export const getAllPostsRepository = async () => {
  const dto = await getAllPostsDataSource();
  httpStatusChecker(dto);
  return mapDTOToPosts(dto.data);
};

export const getAllSpecificPostsRepository = async (data) => {
  console.log(data);
  const dto = await getAllSpecificPostsDataSource(data);
  httpStatusChecker(dto);
  return mapDTOToPosts(dto.data);
};
