import urlBuilder from '../../../../services/urlBuilder';
import services from '../../../../services';

export const getSuggestionsDataSource = async (model) => {
  return await services.postWithBodyNoParams(
    urlBuilder.base_url('/posts/suggestions'),
    model
  );
};
