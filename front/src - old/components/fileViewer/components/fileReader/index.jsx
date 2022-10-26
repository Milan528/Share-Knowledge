import React, { Fragment } from "react";
import Viewer from 'react-file-viewer';
import classStyles from './styles';

const FileReader = (props) => {
    const classes = classStyles();
    const { file } = props
    let ext = file.name.split(".")[1];
    let url = URL.createObjectURL(file)

    return (
        <Fragment>
            <Viewer fileType={ext} filePath={url}/>
            <a href={url} download className={classes.linkPostion}>Click to download</a>
        </Fragment>
    );  
}

export default FileReader