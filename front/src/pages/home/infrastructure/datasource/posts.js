import urlBuilder from '../../../../services/urlBuilder';
import services from '../../../../services';

export const getAllPostsDataSource = async () => {
  return await services.getAll(urlBuilder.base_url('/posts'));
};

export const getAllSpecificPostsDataSource = async (dto) => {
  return await services.postWithBodyNoParams(
    urlBuilder.base_url('/posts/specificPosts'),
    dto
  );
};
