import { Tooltip } from '@mui/material';
import React from 'react';
import {
  Container,
  StyledTypography,
  StyledBookIcon,
  StyledHelpIcon,
} from './styles';

const Title = (props) => {
  const { title, type } = props;
  return (
    <Container>
      <StyledTypography>{title}</StyledTypography>

      {type === 'material' ? (
        <Tooltip title="Materijal">
          <StyledBookIcon />
        </Tooltip>
      ) : (
        <Tooltip title="Pitanje">
          <StyledHelpIcon />
        </Tooltip>
      )}
    </Container>
  );
};

export default Title;
