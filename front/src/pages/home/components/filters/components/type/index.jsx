import React from 'react';
import HelpIcon from '@mui/icons-material/Help';
import Book from '@mui/icons-material/MenuBook';
import { Container, StyledSelect, StyledMenuItem } from './styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../../../../redux/slices';
import { loadPostsForHomepageFilters } from '../../../../reduxThunk/actions';
import { postType } from '../../../../../../utils/enums';

const ScrollableTabs = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.home.type);

  const handleChange = (event) => {
    dispatch(setType(event.target.value));
    dispatch(loadPostsForHomepageFilters());
  };

  return (
    <Container>
      <FormControl>
        <InputLabel>Tip</InputLabel>
        <StyledSelect value={type} label="Tip" onChange={handleChange}>
          <StyledMenuItem value={postType.all}>
            Sve
            <HelpIcon />
            <Book />
          </StyledMenuItem>
          <StyledMenuItem value={postType.question}>
            Pitanja <HelpIcon />
          </StyledMenuItem>
          <StyledMenuItem value={postType.material}>
            Materijali <Book />
          </StyledMenuItem>
        </StyledSelect>
      </FormControl>
    </Container>
  );
};

export default ScrollableTabs;
