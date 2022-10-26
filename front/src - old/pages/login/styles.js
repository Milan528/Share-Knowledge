import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    rootContainer: {
        flexGrow: 1,
        display: "flex",
        "@media (max-width: 650px)" : {
            flexDirection: "column"
        },
        alignItems: "center"
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
