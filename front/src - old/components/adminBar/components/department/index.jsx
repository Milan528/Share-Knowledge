import React from 'react';
import ListHeading from "../components/listHeading";
import ListItem from "../components/listItem";
// import { HOME_ADD_DEPARTMENTS, HOME_REMOVE_DEPARTMENTS } from '../../../../store/actions';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import {useSelector, useDispatch} from "react-redux"

export const optionsView = [
  {key: 0, name: "Računarstvo i informatika"},
  {key: 1, name: "Upravljanje sistemima"},
  {key: 2, name: "Elektronika"},
  {key: 3, name: "Mikrolektronika"},
  {key: 4, name: "Energetika"},
  {key: 5, name: "Telekomunikacije"}
];

const Deparment = () => {
  const home = useSelector(state => state.home);
  const { hideLeftBar, departments: optionsStore } = home;
  const dispatch = useDispatch(); 


  const handleOptionChange =(key) => {
    // if(checked(key))
    //   dispatch({type: HOME_REMOVE_DEPARTMENTS, payload: key});
    // else
    //   dispatch({type: HOME_ADD_DEPARTMENTS, payload: key});
  }

  const checked = (key) => {
    // return optionsStore.filter(option => option.key===key).length > 0
  }

  return (
    <ListHeading hideLeftBar={hideLeftBar} name={"Smer"} icon={<LocalLibrary/>}>
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