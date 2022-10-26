import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    rootContainer: {
        flexGrow: 1,
        display: "flex",
        "@media (max-width: 650px)" : {
            flexDirection: "column",
            alignItems: "center",
        },
    },
    
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        minWidth: 250,
        width: "50%",
        "@media (max-width: 650px)" : {
            width: "90%",
        },
        marginTop: 50,
        alignItems: "center",
    },

    extraButtons: {
        display: "flex",
    }
});

export default classStyles;
