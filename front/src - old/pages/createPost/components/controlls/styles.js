import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    submit: {
        backgroundColor: "black",
        // backgroundColor: "#2ec46d",
        border: "1px solid black",
        '&:hover': {
            boxShadow: "0px 0.5px 1px 0px rgba(0,0,0,0.75)",   
            backgroundColor: "#000000d6",
            // backgroundColor: "#2db968",
        },
        minWidth: 116,
        marginLeft: 10,
        marginRight: 5,
    },
    
    cancel: {
        backgroundColor: "black",
        // backgroundColor: "#0099feba",
        color: "white",
        border: "1px solid black",
        '&:hover': {
            boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.75)",   
            backgroundColor: "#000000d6",
            // backgroundColor: "#0099fee3",
        },
        minWidth: 116,
    },

    fontStyle: {
        color: "white",
        textTransform: 'none',
    },

    container: {
        marginTop: 30,
        textAlign: "center",
    }

});

export default classStyles;
