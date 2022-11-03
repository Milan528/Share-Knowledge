import { getAllTagsDataSource } from '../../datasource/tags';
import { mapDTOToTags } from './mapper';
import httpStatusChecker from '../../../../../services/httpStatusChecker';

export const getAllTagsRepository = async () => {
  const dto = await getAllTagsDataSource();
  httpStatusChecker(dto);
  return mapDTOToTags(dto.data);
};
