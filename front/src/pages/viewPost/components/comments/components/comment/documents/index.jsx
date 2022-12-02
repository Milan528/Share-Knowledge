import React from 'react';
import classStyles from './styles';
import PDF from "../../../../../../assets/pdf1.png"
import DOCX from "../../../../../../assets/docx.png"

const Document = (props) => {
  const classes = classStyles();
  const { documents } = props;

  return (
    documents.length === 0 ?
    null
    :
    <div className={classes.container}>
      {
        documents.map((document, index) => {
          
          let ext = document.split(".");
          ext = ext[ext.length-1]
          console.log()

          return (
            ext==="pdf" ?
            <img src={PDF} key={index} alt="Smiley face" height="30" width="30" className={classes.photo}/>
            :
            <img src={DOCX} key={index} alt="Smiley face" height="30" width="30" className={classes.photo}/>
          )
        })
      }

    </div>
  );
}

export default Document;