import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
   
    paper: {
        padding: 10,
        minHeight: 150,
        display: "flex",
        flexDirection: "column",
        border: "0.5px solid #c9cace",
        marginBottom: 10,
    },

    container: {
        overFlow: "auto",
    }
});

export default classStyles;
