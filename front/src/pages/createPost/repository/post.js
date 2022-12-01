import { currentDate } from '../../../components/date';
import services from '../../../services/index';
import fileServices from '../../../services/fileServices';

export const createPostRepository = async (post) => {
  const postDTO = mapPostToDto(post);
  const DTO = {
    post: postDTO,
  };
  const response = await services.post('/posts', DTO);

  const formData = new FormData();
  const allFiles = post.images.concat(post.documents);
  allFiles.forEach((file, index) => {
    formData.append(`files${index}`, file);
  });
  formData.append('postId', response.data);

  const dto = await fileServices.post('/upload/post', formData);
  return dto.message;
};

function mapPostToDto(post) {
  return {
    title: post.title,
    text: post.description,
    type: post.type === 'pitanje' ? 'q' : 'a',
    date: currentDate,
    likes: 0,
  };
}