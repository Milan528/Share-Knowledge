import services from '../../../services/index';
import { formatDate } from '../../../utils/dateFormater';

export const getPostRepository = async (postId) => {
  const dto = await services.get(`/posts/${postId}`);
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
