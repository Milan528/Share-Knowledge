import React from 'react';
import classStyles from './styles';
import image from '../../../../assets/Logo.jpg';

const Logo = () => {
  const classes = classStyles();

  return (
    <div className={classes.position}>
      <img src={image} alt="Smiley face" height="300" width="300" />
    </div>
  );
}

export default Logo;

// Deljenje znanja predstavlja osnovni čin prijateljstva. Zato što je to način da nešto date, bez da bilo šta izgubite. - Richard Stallman
