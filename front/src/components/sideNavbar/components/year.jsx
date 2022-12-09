import React, { useState, useEffect } from 'react';
import Option from './option';
import School from '@mui/icons-material/School';

export const suboptions = [
  { key: 0, name: 'Prva' },
  { key: 1, name: 'Druga' },
  { key: 2, name: 'Treća' },
  { key: 3, name: 'Četvrta' },
];

const Year = (props) => {
  const { hidden } = props;
  const [selectedSuboptions, setSelectedSuboptions] = useState([]);

  useEffect(() => {
    if (setSelectedSuboptions !== []) console.log(setSelectedSuboptions);
  }, [setSelectedSuboptions]);

  return (
    <Option
      hidden={hidden}
      name={'Godina'}
      icon={<School />}
      suboptions={suboptions}
      selectedSuboptions={selectedSuboptions}
      setSelectedSuboptions={setSelectedSuboptions}
    ></Option>
  );
};

export default Year;
