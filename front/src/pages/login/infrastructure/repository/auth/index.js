import { loginUserDatasource } from '../../datasource/auth';
import { mapDTOToModel } from './mapper';
import httpStatusChecker from '../../../../../services/httpStatusChecker';

export const loginUserRepository = async (model) => {
  const dto = await loginUserDatasource(model);
  httpStatusChecker(dto);
  return mapDTOToModel(dto.data);
};
