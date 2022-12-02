import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import useIsMounted from "../../../../components/isMounted"


export const Hook = (props) => {
    const [ value, setValue ] = useState(false); 
    const isMounted = useIsMounted();
    
    useEffect(() => {
        if(isMounted())
            console.log("Component is mounted")

        return () => {setValue(true)}
    }, []);
    
    return <div> Using is mounted hooks </div>
}

export default withRouter(Hook);





