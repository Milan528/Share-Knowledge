import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { TagsContainer, StyledChip } from './styles';





const Tags = () => {
    const [tags, setTags] = useState([])

    console.log(tags)

    const handleOnChange = (ev, value) => {
        if(value && !tags.includes(value.label))
            setTags(prev => [...prev, value.label])
    }
    const handleDelete = (value) => {
        setTags(prev => prev.filter(item => item !== value))
      };
  return (
    <TagsContainer>
        <Autocomplete
        onChange={handleOnChange}
        id="country-select-demo"
        sx={{ minWidth: 200 }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
            />
            {option.label} ({option.code}) +{option.phone}
            </Box>
        )}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Choose a country"
            inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
            }}
            />
        )}
        />
            {tags.map((tag, index) => <StyledChip label={tag} key={index}  onDelete={() => handleDelete(tag)}/>)}
    
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