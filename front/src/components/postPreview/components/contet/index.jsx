import React from 'react';
import { StyledText } from './styles';

const Content = (props) => {
  const { text } = props;

  const handleClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  return <StyledText onClick={handleClick}>{text}</StyledText>;
};

export default Content;
