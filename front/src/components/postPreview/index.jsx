import React, { useState } from 'react';
import { StyledPaper } from './styles';
import Title from './components/title';
import Content from './components/contet';
import Details from './components/details';
import Tags from './components/tags';

const PostPreview = (props) => {
  const [showPost, setShowPost] = useState(false);

  const { data } = props;
  const {
    title,
    type,
    text,
    files,
    tags,
    likes,
    dislikes,
    id,
    date,
    postedBy,
  } = data;

  return (
    <StyledPaper elevation={1} onClick={() => setShowPost(true)}>
      <Title title={title} type={type} postedBy={postedBy} date={date} />
      <Content text={text} files={files} />
      <Tags tags={tags} />
      <Details
        likes={likes}
        postId={id}
        data={data}
        dislikes={dislikes}
        showPost={showPost}
        setShowPost={setShowPost}
      />
    </StyledPaper>
  );
};

export default PostPreview;
