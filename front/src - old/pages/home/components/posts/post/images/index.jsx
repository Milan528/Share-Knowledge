import React from 'react';
import classStyles from './styles';

const Post = (props) => {
  const classes = classStyles();
  const { images } = props; 

  return (
    images.length === 0 ?
    null
    :
    <div>
      { 
        images.map((image, index) => (
        
          <img 
          src={image} 
          alt="Smiley face" 
          height="70" 
          width="70" 
          key={index}
          className={classes.photo}
          />
        
        ))
      }
    </div>
  );
}

export default Post;