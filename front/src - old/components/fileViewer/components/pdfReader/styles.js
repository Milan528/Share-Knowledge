import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    position: {
        maxHeight: 400,
        
    },

    document: {
        maxHeight: 400,
        overflowY: "scroll",
        overflowX: "hidden",
    },

    page: {
        marginLeft: -10,
    },

    divider: {
        marginTop: 5,
        marginBottom: 20,
    },
    
    formControl: {
        marginTop: 5,
        marginBottom: 20,
    },

});

export default classStyles;
