import { registerUserDatasource } from '../../datasource/auth';
import { mapDTOToModel } from './mapper';

export const registerUserRepository = async (model) => {
  const dto = await registerUserDatasource(model);
  return mapDTOToModel(dto.data);
};
