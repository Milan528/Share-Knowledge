import services from '../../../services';
import { formatDate } from '../../../utils/dateFormater';

export const getCommentsRepository = async (postId) => {
  const dto = await services.get(`/comments/post/${postId}`);
  return mapDTOToComments(dto.data);
};

export const mapDTOToComment = (dto) => {
  return {
    ...dto,
    date: formatDate(new Date(dto.date)),
  };
};

export const mapDTOToComments = (dto) => {
  return dto.map((comment) => mapDTOToComment(comment));
};

export const addCommentRepository = async (comment, setUploadProgress) => {
  const commentDTO = mapCommentToDto(comment);
  const DTO = {
    comment: commentDTO,
  };
  const response = await services.post('/comments', DTO);
  const commentId = response.data;

  const formData = new FormData();
  const allFiles = comment.images.concat(
    comment.documents.concat(comment.videos)
  );

  if (allFiles.length > 0) {
    allFiles.forEach((file, index) => {
      formData.append(`files${index}`, file);
    });
    formData.append('commentId', commentId);

    await services.postFile('/upload/comment', formData, setUploadProgress);
  }
};

export const getCommentLikeDislikeStatusRepository = async (data) => {
  const dto = await services.post('/comments/commentLikeDislikeStatus', data);
  return dto.data;
};

export const addCommentLikeRepository = async (data) => {
  const dto = await services.post('/comments/like', data);
  return dto.data;
};

export const removeCommentLikeRepository = async (data) => {
  const dto = await services.delete('/comments/like', data);
  return dto.data;
};

export const addCommentDislikeRepository = async (data) => {
  const dto = await services.post('/comments/dislike', data);
  return dto.data;
};

export const removeCommentDislikeRepository = async (data) => {
  const dto = await services.delete('/comments/dislike', data);
  return dto.data;
};

function mapCommentToDto(comment) {
  return {
    text: comment.description,
    postID: comment.postID,
  };
}
