import urlBuilder from '../../../services/urlBuilder';
import services from '../../../services';

export const registerUserRepository = async (model) => {
  const dto = await services.postWithBodyNoParams(
    urlBuilder.base_url('/auth/register'),
    model
  );
  return dto.data;
};
