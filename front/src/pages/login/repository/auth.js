import urlBuilder from '../../../services/urlBuilder';
import services from '../../../services';

export const loginUserRepository = async (model) => {
  const dto = await services.postWithBodyNoParams(
    urlBuilder.base_url('/auth/login'),
    model
  );
  return dto.data;
};
