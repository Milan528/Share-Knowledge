import urlBuilder from '../../../services/urlBuilder';
import services from '../../../services';

export const getAllTagsRepository = async () => {
  const dto = await services.getAll(urlBuilder.base_url('/tags'));
  return dto.data;
};
