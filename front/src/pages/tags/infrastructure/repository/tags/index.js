import {
  getAllTagsDataSource,
  createTagDataSource,
} from '../../datasource/tags';
import { mapDTOToTags, mapDTOToTag } from './mapper';

export const getAllTagsRepository = async () => {
  const dto = await getAllTagsDataSource();
  return mapDTOToTags(dto.data);
};

export const createTagRepository = async (model) => {
  const dto = await createTagDataSource(model);
  return mapDTOToTag(dto.data);
};
