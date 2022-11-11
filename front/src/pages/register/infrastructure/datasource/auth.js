import urlBuilder from '../../../../services/urlBuilder';
import services from '../../../../services';

export const registerUserDatasource = async (dto) => {
  return await services.postWithBodyNoParams(
    urlBuilder.base_url('/auth/register'),
    dto
  );
};
