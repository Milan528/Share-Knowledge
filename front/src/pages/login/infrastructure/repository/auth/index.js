import { loginUserDatasource } from '../../datasource/auth';
import { mapDTOToModel } from './mapper';

export const loginUserRepository = async (model) => {
  const dto = await loginUserDatasource(model);
  return mapDTOToModel(dto.data);
};
