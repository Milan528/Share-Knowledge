import services from '../../../services/index';
import { formatDate } from '../../../utils/dateFormater';

export const getPostRepository = async (postId) => {
  const dto = await services.get(`/posts/postId/${postId}`);
  return mapDTOToPost(dto.data.posts[0]);
};

export const mapDTOToPost = (dto) => {
  return {
    ...dto,
    type: dto.type === 'question' ? 'pitanje' : 'materijal',
    date: formatDate(new Date(dto.date)),
  };
};

export const mapDTOToPosts = (dto) => {
  return dto.map((post) => mapDTOToPost(post));
};

export const getSpecificPostRepository = async (data) => {
  const dto = await services.post('/posts/specificPosts', data);
  return {
    post: mapDTOToPost(dto.data.posts[0]),
    // totalNumberOfPages: dto.data.totalNumberOfPages,
    // totalNumberOfPosts: dto.data.totalNumberOfPosts,
  };
};
