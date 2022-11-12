import { mapDTOToModel } from './mapper';
import httpStatusChecker from '../../../../../services/httpStatusChecker';
import { getSuggestionsDataSource } from '../../datasource/searchBar';

export const getSuggestionsRepository = async (model) => {
  const dto = await getSuggestionsDataSource(model);
  httpStatusChecker(dto);
  return mapDTOToModel(dto.data);
};
