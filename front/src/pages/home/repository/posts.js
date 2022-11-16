import urlBuilder from '../../../services/urlBuilder';
import services from '../../../services';

export const getAllPostsRepository = async () => {
  const dto = await services.getAll(urlBuilder.base_url('/posts'));
  return mapDTOToPosts(dto.data);
};

export const getAllSpecificPostsRepository = async (data) => {
  const dto = await services.postWithBodyNoParams(
    urlBuilder.base_url('/posts/specificPosts'),
    data
  );
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
