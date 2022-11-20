import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
   
    container: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 10,
    },

    button: {
        padding: 0,
        marginTop: 0,
        '&:hover': {
            backgroundColor: "white",
        },
    },

    like: {
        margin: "0px 0px -3px 5px"
    },

    tag: {
        marginRight: 5,
        marginBottom: 5,
    },

    date: {
        // marginLeft: 30,
        display: "flex",
    },

    backgroundColor: {
        backgroundColor: "#2ec46d",
        color: "white",
        border: "1px solid black",
        '&:hover': {
            boxShadow: "0px 0.5px 1px 0px rgba(0,0,0,0.75)",   
            backgroundColor: "#2ec46d !important",
        },
        minWidth: 116,
    },

    fontType: {
        textTransform: 'none',
        color: "white",
    },

});

export default classStyles;
