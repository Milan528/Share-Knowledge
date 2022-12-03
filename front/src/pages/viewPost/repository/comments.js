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
  const commentId = response.data;

  const formData = new FormData();
  const allFiles = comment.images.concat(comment.documents);

  if (allFiles.length > 0) {
    allFiles.forEach((file, index) => {
      formData.append(`files${index}`, file);
    });
    formData.append('commentId', commentId);

    await services.postFile('/upload/comment', formData);
  }
};

function mapCommentToDto(comment) {
  return {
    text: comment.description,
    postID: comment.postID,
  };
}
