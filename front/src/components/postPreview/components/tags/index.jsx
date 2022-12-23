import React from 'react';
import { StyledChip } from './styles';

const Tags = (props) => {
  const { tags } = props;

  const handleClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <div>
      {tags.map((tag, index) => (
        <StyledChip
          label={tag.tag}
          variant="outlined"
          key={index}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Tags;
