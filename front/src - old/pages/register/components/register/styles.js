import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    heading: {
        marginLeft: 10,
        color: "black"
    },

    passwordChange: {
    },

    input: {
        backgroundColor: "white",
        marginBottom: 10,
    },

    button: {
        backgroundColor: "#969696",
        border: "white",
        color: "white",
        '&:hover': {
            backgroundColor: "#7b7a7a",
        },
        marginBottom: 10,
    },

    paper: {
        padding: 10,
        marginBottom: 30,
        minHeight: 150,
        display: "flex",
        flexDirection: "column",
        border: "0.5px solid",
        backgroundColor: "#cccccc",
        alignItems: "center",
    },

    recaptha: {
        display: "flex",
        justifyContent: "center",
    }

});

export default classStyles;
