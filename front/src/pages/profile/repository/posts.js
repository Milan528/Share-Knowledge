import services from '../../../services';
import { formatDate } from '../../../utils/dateFormater';

export const loadUserPostsRepository = async (username, order) => {
  const dto = await services.get(
    `/posts/user?username=${username}&order=${order}`
  );
  return mapDTOToPosts(dto.data.posts);
};

export const loadReportedPostsRepository = async (username, order) => {
  const dto = await services.get(`/posts/reports`);
  console.log(dto);
  return mapDTOToPosts(dto.data.posts);
};

export const mapDTOToPost = (dto) => {
  return {
    ...dto,
    date: formatDate(new Date(dto.date)),
    postedBy: dto.username,
  };
};

export const mapDTOToPosts = (dto) => {
  return dto.map((post) => mapDTOToPost(post));
};
