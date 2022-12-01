import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './components/comment';

const Comments = () => {
  const comments= useSelector((state) => state.post.comments);
  console.log(comments)
  return (comments.map(comment => <Comment key={JSON.stringify(comment)} data={comment}/>))
};

export default Comments;
