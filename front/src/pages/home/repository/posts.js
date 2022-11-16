import services from '../../../services/index';

export const getAllPostsRepository = async () => {
  const dto = await services.get('/posts');

  return mapDTOToPosts(dto.data);
};

export const getAllSpecificPostsRepository = async (data) => {
  const dto = await services.post('/posts/specificPosts', data);

  return mapDTOToPosts(dto.data);
};

export const mapDTOToPost = (dto) => {
  return {
    ...dto,
    type: dto.type === 'q' ? 'question' : 'answer',
  };
};

export const mapDTOToPosts = (dto) => {
  return dto.map((post) => mapDTOToPost(post));
};
