import { currentDate } from '../../../utils/date';
import services from '../../../services';

export const getCommentsRepository = async (postId) => {
  const dto = await services.get(`/comments/post/${postId}`);
  return dto.data;
};

export const addCommentRepository = async (comment) => {
  const commentDTO = mapCommentToDto(comment);
  const DTO = {
    comment: commentDTO,
  };
  const response = await services.post('/comments', DTO);

  // const formData = new FormData();
  // const allFiles = comment.images.concat(comment.documents);
  // allFiles.forEach((file, index) => {
  //   formData.append(`files${index}`, file);
  // });
  // formData.append('commentId', response.data);

  // const dto = await services.postFile('/upload/comment', formData);
  // return dto.message;
  return response;
};

function mapCommentToDto(comment) {
  return {
    text: comment.description,
    date: currentDate,
    postID: comment.postID,
  };
}
