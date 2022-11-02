import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { TagsContainer } from './styles';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { setSelectedTags } from '../../../../redux/slices';
import { useDispatch, useSelector } from 'react-redux';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;




const Tags = () => {
    const dispatch = useDispatch();
    const home = useSelector((state) => state.home);
    const {selectedTags } = home;
    // const [selectedTags, setSelectedTags] = useState([])
    const handleOnChange = (event, value) => {
        if(value)
            dispatch(setSelectedTags(value));
     }
   
  

  return (
    <TagsContainer>
    <Autocomplete
      multiple
      onChange={handleOnChange}
      id="checkboxes-tags"
      options={countries}
      disableCloseOnSelect
      getOptionLabel={(option) => option.label}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.label}
        </li>
      )}
      style={{ width: "80%" }}
      renderInput={(params) => (
        <TextField {...params} label="Selected Tags" placeholder="Tags" />
      )}
    />
    </TagsContainer>
  )
}

export default Tags




const countries = [

    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    { code: 'BB', label: 'Barbados', phone: '1-246' },
    { code: 'BD', label: 'Bangladesh', phone: '880' },
    { code: 'BE', label: 'Belgium', phone: '32' },
    { code: 'BF', label: 'Burkina Faso', phone: '226' },
    { code: 'BG', label: 'Bulgaria', phone: '359' },
    { code: 'BH', label: 'Bahrain', phone: '973' },
  ];