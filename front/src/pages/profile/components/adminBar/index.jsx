import React, {useEffect, useState} from 'react';
import useWindowSize from '../../../../components/useWindowSize';
import { useSelector, useDispatch } from "react-redux";
import {SliderContainer, Slider, StyledDivider, StyledDrawer, StyledArrow} from "./styles";
import { ToggleButton } from "./styles";
import Year from './components/year';
import Department from './components/department';
import Logo from '../../../../assets/Logo.jpg';

const LeftBar = () => {
    const screenWidth = useWindowSize()
    const [hidden, setHidden] = useState(false);

    const handleClick = () => {
      setHidden(!hidden);
    };
  

    if(screenWidth>650){
        return     (
        <SliderContainer>
            <Slider hidden={hidden}>
            <ToggleButton onClick={handleClick}>
                <StyledArrow hidden={hidden}/>
            </ToggleButton>
            <StyledDivider/>
            <Year hidden={hidden}/>
            <Department hidden={hidden}/>
            </Slider>
        </SliderContainer>
        )
    }
    return (
        <StyledDrawer
            open={!hidden}
            onClose={handleClick}
        >
                    <ToggleButton
                fullWidth
                disableRipple
                onClick={handleClick}
            ></ToggleButton>
            <img src={Logo} width='50px' height={'50px'}/>
            <StyledDivider/>
            <Year hidden={hidden}/>
            <Department hidden={hidden}/>
        </StyledDrawer>
    );
}

export default LeftBar;