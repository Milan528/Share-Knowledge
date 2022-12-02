import React from 'react';
import { StyledChip } from './styles';

const Tags = (props) => {
  const { tags } = props;
  return (
    <div>
      Tagovi
      {tags.map((tag, index) => (
        <StyledChip label={tag.tag} variant="outlined" key={index} />
      ))}
    </div>
  );
};

export default Tags;
