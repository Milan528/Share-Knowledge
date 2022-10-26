import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    container: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center"
    },
    
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        width: "60%",
        minWidth: 250,
        "@media (max-width: 650px)" : {
            width: "90%",
        }
    },

    paper: {
        padding: 10,
        paddingRight: 15,
        marginBottom: 30,
        minHeight: 150,

        border: "0.5px solid #c9cace",
    },
});

export default classStyles;
