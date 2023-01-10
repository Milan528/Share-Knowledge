import React from 'react';
import { StyledText } from './styles';

const Content = (props) => {
  const { text } = props;

  return <StyledText>{text}</StyledText>;
};

export default Content;
