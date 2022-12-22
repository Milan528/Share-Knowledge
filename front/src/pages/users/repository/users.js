import services from '../../../services/index';

export const loadUserAndLikesRepository = async () => {
  const dto = await services.get(`/users/likes`);
  return dto.data;
};
