import urlBuilder from '../../../services/urlBuilder';
import services from '../../../services';

export const getSuggestionsRepository = async (model) => {
  const dto = await services.postWithBodyNoParams(
    urlBuilder.base_url('/posts/suggestions'),
    model
  );
  return dto.data;
};
