import { mapDTOToModel } from './mapper';
import { getSuggestionsDataSource } from '../../datasource/searchBar';

export const getSuggestionsRepository = async (model) => {
  const dto = await getSuggestionsDataSource(model);
  return mapDTOToModel(dto.data);
};
