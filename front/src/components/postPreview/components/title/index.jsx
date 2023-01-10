import { Tooltip } from '@mui/material';
import React from 'react';
import {
  HeadingContainer,
  StyledTypography,
  StyledBookIcon,
  StyledHelpIcon,
  PostedByContainer,
  DateIcon,
  DateContainer,
  StyledH3,
} from './styles';
import { profileRoute } from '../../../../app/router/routes';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Title = (props) => {
  const { title, type, postedBy, date } = props;
  const navigate = useNavigate();

  const handleVisitUserProfile = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    navigate({
      pathname: profileRoute,
      search: `username=${postedBy}`,
    });
  };

  const typeIcon =
    type === 'material' ? (
      <Tooltip title="Materijal">
        <StyledBookIcon />
      </Tooltip>
    ) : (
      <Tooltip title="Pitanje">
        <StyledHelpIcon />
      </Tooltip>
    );

  return (
    <>
      <HeadingContainer>
        {typeIcon}
        <StyledTypography variant="h5">{title}</StyledTypography>
      </HeadingContainer>
      <PostedByContainer>
        <StyledH3 onClick={handleVisitUserProfile}>{postedBy}</StyledH3>
        <DateContainer>
          <DateIcon />
          <Typography> {date}</Typography>
        </DateContainer>
      </PostedByContainer>
    </>
  );
};

export default Title;
