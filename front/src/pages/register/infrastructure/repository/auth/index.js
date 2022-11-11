import { registerUserDatasource } from '../../datasource/auth';
import { mapDTOToModel } from './mapper';
import httpStatusChecker from '../../../../../services/httpStatusChecker';

export const registerUserRepository = async (model) => {
  const dto = await registerUserDatasource(model);
  httpStatusChecker(dto);
  return mapDTOToModel(dto.data);
};
