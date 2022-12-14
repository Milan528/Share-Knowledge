import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { TagsContainer } from './styles';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { setSelectedTags } from './redux/slices';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadPostsForHomepageFilters,
  loadTags,
} from '../../../../reduxThunk/actions';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Tags = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.home.tags);
  const { selectedTags, allTags } = state;

  const handleOnChange = (event, value) => {
    if (value) dispatch(setSelectedTags(value));

    if (value.length < selectedTags.length)
      dispatch(loadPostsForHomepageFilters());
  };

  useEffect(() => {
    dispatch(loadTags());
  }, [dispatch]);

  const handleOnClose = () => {
    dispatch(loadPostsForHomepageFilters());
  };

  return (
    <TagsContainer>
      <Autocomplete
        onClose={handleOnClose}
        multiple
        onChange={handleOnChange}
        value={allTags.filter((tag) =>
          selectedTags.some((selectedTag) => selectedTag.id === tag.id)
        )}
        id="checkboxes-tags"
        options={allTags}
        disableCloseOnSelect
        getOptionLabel={(option) => option.tag}
        renderOption={(props, option, { selected }) => {
          return (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.tag}
            </li>
          );
        }}
        style={{ width: '100%' }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Odaberi godinu, smer, predmet..."
            placeholder="Odabrani tagovi"
          />
        )}
      />
    </TagsContainer>
  );
};

export default Tags;
