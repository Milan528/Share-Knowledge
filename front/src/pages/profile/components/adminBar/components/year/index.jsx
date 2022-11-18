import React from 'react';
import ListHeading from "../components/listHeading";
import ListItem from "../components/listItem";
import School from '@mui/icons-material/School';

export const optionsView = [
  {key: 0, name: "Prva"},
  {key: 1, name: "Druga"},
  {key: 2, name: "Treća"},
  {key: 3, name: "Četvrta"}
];

const Year = (props) => {
  const {hidden} = props;
  const handleOptionChange =(key) => {

  }

  const checked = (key) => {
  }

  return (
    <ListHeading hideLeftBar={hidden}  name={"Godina"} icon={<School/>}>
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

export default Year
