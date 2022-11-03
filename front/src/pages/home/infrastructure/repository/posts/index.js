import { getAllPostsDataSource } from '../../datasource/posts';
import { mapDTOToPosts } from './mapper';
import httpStatusChecker from '../../../../../services/httpStatusChecker';

export const getAllPostsRepository = async () => {
  const dto = await getAllPostsDataSource();
  httpStatusChecker(dto);
  return mapDTOToPosts(dto.data);
};
