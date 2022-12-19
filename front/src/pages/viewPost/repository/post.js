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

export const loadPostForHomepageFiltersRepository = async (data) => {
  const dto = await services.post('/posts/postsForHomepageFilters', data);
  return {
    post: mapDTOToPost(dto.data.posts[0]),
    //These two are also returned, but not used
    // totalNumberOfPages: dto.data.totalNumberOfPages,
    // totalNumberOfPosts: dto.data.totalNumberOfPosts,
  };
};

export const getPostLikeDislikeStatusRepository = async (data) => {
  const dto = await services.post('/posts/postLikeDislikeStatus', data);
  return dto.data;
};

export const addPostLikeRepository = async (data) => {
  const dto = await services.post('/posts/like', data);
  return dto.data;
};

export const removePostLikeRepository = async (data) => {
  const dto = await services.delete('/posts/like', data);
  return dto.data;
};

export const addPostDislikeRepository = async (data) => {
  const dto = await services.post('/posts/dislike', data);
  return dto.data;
};

export const removePostDislikeRepository = async (data) => {
  const dto = await services.delete('/posts/dislike', data);
  return dto.data;
};
