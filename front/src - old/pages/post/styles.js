import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    container: {
        flexGrow: 1,
        display: "flex",
    },
    
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        minWidth: 250,
        width: "80%",
        "@media (max-width: 650px)" : {
            width: "90%",
        },
    },
});

export default classStyles;
