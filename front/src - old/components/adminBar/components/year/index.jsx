import React, { useContext } from 'react';
import ListHeading from "../components/listHeading";
import ListItem from "../components/listItem";
// import { HOME_ADD_YEARS, HOME_REMOVE_YEARS } from '../../../../store/actions';
import School from '@material-ui/icons/School';
import {useSelector, useDispatch} from "react-redux"

export const optionsView = [
  {key: 0, name: "Prva"},
  {key: 1, name: "Druga"},
  {key: 2, name: "Treća"},
  {key: 3, name: "Četvrta"}
];

const Year = () => {
  const home = useSelector(state => state.home);
  const { hideLeftBar, years: optionsStore } = home;
  const dispatch = useDispatch(); 

  const handleOptionChange =(key) => {
    // if(checked(key))
    //   dispatch({type: HOME_REMOVE_YEARS, payload: key});
    // else
    //   dispatch({type: HOME_ADD_YEARS, payload: key});
  }

  const checked = (key) => {
    // return optionsStore.filter(option => option.key===key).length > 0
  }

  return (
    <ListHeading hideLeftBar={hideLeftBar}  name={"Godina"} icon={<School/>}>
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
