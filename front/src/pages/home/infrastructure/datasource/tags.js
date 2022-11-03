import urlBuilder from '../../../../services/urlBuilder';
import services from '../../../../services';

export const getAllTagsDataSource = async () => {
  return await services.getAll(urlBuilder.base_url('/tags'));
};
