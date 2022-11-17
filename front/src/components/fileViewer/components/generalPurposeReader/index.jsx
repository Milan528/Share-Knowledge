import React from "react";
import Viewer from 'react-file-viewer';
import {StyledLink} from './styles';

const GeneralPurposeReader = (props) => {
    const { file } = props
    let ext = file.name.split(".")[1];
    let url = URL.createObjectURL(file)

    return (
        <>
            <Viewer fileType={ext} filePath={url}/>
            <StyledLink href={url} download >Click to download</StyledLink>
        </>
    );  
}

export default GeneralPurposeReader