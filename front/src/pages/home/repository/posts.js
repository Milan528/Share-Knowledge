import services from '../../../services/index';
import { formatDate } from '../../../utils/dateFormater';

export const getAllSpecificPostsRepository = async (data) => {
  const dto = await services.post('/posts/specificPosts', data);
  return {
    posts: mapDTOToPosts(dto.data.posts),
    totalNumberOfPages: dto.data.totalNumberOfPages,
  };
};

export const mapDTOToPost = (dto) => {
  return {
    ...dto,
    type: dto.type === 'q' ? 'question' : 'answer',
    date: formatDate(new Date(dto.date)),
  };
};

export const mapDTOToPosts = (dto) => {
  return dto.map((post) => mapDTOToPost(post));
};
