import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
   
    controlls: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 10,
        justifyContent: "flex-end",
    },

    like: {
        margin: "0px 0px -3px 5px"
    },

    tag: {
        marginRight: 5,
        marginBottom: 5,
    },

    date: {
        marginLeft: 10,
    },

    backgroundColor: {
        // backgroundColor: "#2ec46d",
        color: "white",
        border: "1px solid black",
        backgroundColor: "green",
        "&:hover": {
            backgroundColor: "#027202 !important",
        },
        minWidth: 116,
    },
    
    fontType: {
        textTransform: 'none',
        color: "white",
        
    },

});

export default classStyles;
