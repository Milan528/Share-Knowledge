import urlBuilder from '../../../../services/urlBuilder';
import services from '../../../../services';

export const loginUserDatasource = async (dto) => {
  return await services.postWithBodyNoParams(
    urlBuilder.base_url('/auth/login'),
    dto
  );
};
