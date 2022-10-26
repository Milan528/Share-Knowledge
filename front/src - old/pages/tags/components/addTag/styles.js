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
        marginTop: 20,
    },
    
    fontStyle: {
        color: "white",
        textTransform: 'none',
    },

});


export default classStyles;
