import services from '../../../services/index';

export const createPostRepository = async (post) => {
  const postDTO = mapPostToDto(post);
  const DTO = {
    post: postDTO,
  };
  const response = await services.post('/posts', DTO);
  const postId = response.data;

  const formData = new FormData();
  const allFiles = post.images.concat(post.documents);

  if (allFiles.length > 0) {
    allFiles.forEach((file, index) => {
      formData.append(`files${index}`, file);
    });
    formData.append('postId', postId);

    await services.postFile('/upload/post', formData);
  }
};

function mapPostToDto(post) {
  return {
    title: post.title,
    text: post.description,
    type: post.type,
  };
}
