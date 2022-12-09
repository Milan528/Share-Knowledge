import React, { useState, useEffect } from 'react';
import Option from './option';
import Icon from '@mui/icons-material/LocalLibrary';

export const suboptions = [
  { key: 0, name: 'Računarstvo i informatika' },
  { key: 1, name: 'Upravljanje sistemima' },
  { key: 2, name: 'Elektronika' },
  { key: 3, name: 'Mikrolektronika' },
  { key: 4, name: 'Energetika' },
  { key: 5, name: 'Telekomunikacije' },
];

const Deparment = (props) => {
  const { hidden } = props;
  const [selectedSuboptions, setSelectedSuboptions] = useState([]);

  useEffect(() => {
    if (setSelectedSuboptions !== []) console.log(setSelectedSuboptions);
  }, [setSelectedSuboptions]);

  return (
    <Option
      hidden={hidden}
      name="Smer"
      icon={<Icon />}
      suboptions={suboptions}
      selectedSuboptions={selectedSuboptions}
      setSelectedSuboptions={setSelectedSuboptions}
    ></Option>
  );
};

export default Deparment;
