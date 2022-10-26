import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    container: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
    },

    paginationContainer: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        marginBottom: 20,
        flexDirection: "column",
    },
    
    paper: {
        padding: 10,
        paddingRight: 15,
        marginBottom: 30,
        minHeight: 150,
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "0.5px solid #c9cace",
    },

    textField: {
        width: 150,
        marginTop: 20,
    }

});

export default classStyles;
