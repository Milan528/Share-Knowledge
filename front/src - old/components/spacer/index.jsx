import React from 'react'
import classStyles from './styles';

const Spacer = (props) => {
    const classes = classStyles();
    return <div className={`${classes.spacer} ${props.className}`}></div>
}

export default Spacer