import services from '../../../services';

export const getCommentsRepository = async (postId) => {
  const dto = await services.post('/comments/commentsForPost', { postId });
  return dto.data;
};
