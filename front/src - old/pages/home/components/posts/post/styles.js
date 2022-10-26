import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
   
    paper: {
        padding: 10,
        marginBottom: 30,
        minHeight: 150,
        display: "flex",
        flexDirection: "column",
        border: "0.5px solid #c9cace",
        boxShadow: "0 10px 20px 0 #393a3d26",
    },

    container: {
        overFlow: "auto",
    }
});

export default classStyles;
