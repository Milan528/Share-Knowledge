import React from 'react';
import ListHeading from "../components/listHeading";
import ListItem from "../components/listItem";
import LocalLibrary from '@mui/icons-material/LocalLibrary';

export const optionsView = [
  {key: 0, name: "Računarstvo i informatika"},
  {key: 1, name: "Upravljanje sistemima"},
  {key: 2, name: "Elektronika"},
  {key: 3, name: "Mikrolektronika"},
  {key: 4, name: "Energetika"},
  {key: 5, name: "Telekomunikacije"}
];

const Deparment = (props) => {
  const {hidden} = props;

  const handleOptionChange =(key) => {
  }

  const checked = (key) => {
  }

  return (
    <ListHeading hideLeftBar={hidden} name={"Smer"} icon={<LocalLibrary/>}>
      {optionsView.map((view, index) => 
        <ListItem 
          name={view.name} 
          checked={checked(view.key)} 
          notify={() => handleOptionChange(view.key)} 
          key={index}
        />
      )}
    </ListHeading>
  );
}

export default Deparment