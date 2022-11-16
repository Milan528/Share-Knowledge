import services from '../../../services/index';

export const getSuggestionsRepository = async (model) => {
  const dto = await services.post('/posts/suggestions', model);
  return dto.data;
};
