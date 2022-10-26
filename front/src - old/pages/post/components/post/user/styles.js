import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
   
    controlls: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 10,
    },

    button: {
        padding: 0,
        borderRadius: "20%",
        '&:hover': {
            backgroundColor: "white",
        },
        marginLeft: -10,
    },

    account: {
        textAlign: "center",
    },

});

export default classStyles;
