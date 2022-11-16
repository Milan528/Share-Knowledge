import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import { StyledButton } from './styles';
import { deleteTag } from '../../reduxThunk/actions';
import Typography from '@mui/material/Typography';
import { Container } from './styles';
import { loadTags } from '../../reduxThunk/actions';

export default function ComboBox() {
  const [tag, setTag] = useState({ id: -1, tag: 'none' });
  const loading = useSelector((state) => state.tags.loading);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.tags);
  const { tags } = state;

  console.log(tags);

  useEffect(() => {
    dispatch(loadTags());
  }, [dispatch]);

  const handleDeleteTag = (tag) => {
    dispatch(deleteTag(tag));
  };

  return (
    <Container>
      <Autocomplete
        value={tag}
        onChange={(e, value) => setTag(value)}
        options={tags}
        getOptionLabel={(option) => option.tag}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Pronadji tag" variant="outlined" />
        )}
      />
      <StyledButton
        disabled={loading}
        onClick={handleDeleteTag}
        variant="outlined"
      >
        <Typography variant="button" color="inherit">
          Obrisi tag
        </Typography>
      </StyledButton>
    </Container>
  );
}
