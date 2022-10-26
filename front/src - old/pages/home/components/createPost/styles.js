import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
   
    container: {
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    button: {
        // backgroundColor: "#2ec46d",
        border: "1px solid black",
        backgroundColor: "green",
        '&:hover': {
            boxShadow: "0px 0.5px 1px 0px rgba(0,0,0,0.75)",   
            backgroundColor: "#027202",
            // backgroundColor: "#2db968",
        },

        minWidth: 116,
        marginLeft: 10,
        color: "white",
    },

    fontStyle: {
        textTransform: 'none',
    },

    fontType: {
        textTransform: 'none',
        textAlign: "center",
    },

    divider: {
        marginTop: 5,
        marginBottom: 20,
    }
});

export default classStyles;
