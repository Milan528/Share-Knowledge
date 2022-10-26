import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    rootContainer: {
        flexGrow: 1,
        display: "flex",
        "@media (max-width: 650px)" : {
            alignItems: "center",
        },
        alignItems: "center",
        marginTop: 20,
    },
    
    motivationContainer: {
        display: "flex",
        alignItems: "end",
    },

    extraButtons: {
        display: "flex",
    },

    container: {
        textAlign: "center",
        width: "50%",
    },
});

export default classStyles;
