import { getAllTagsDataSource } from '../../datasource/tags';
import { mapDTOToTags } from './mapper';

export const getAllTagsRepository = async () => {
  const dto = await getAllTagsDataSource();
  return mapDTOToTags(dto.data);
};
