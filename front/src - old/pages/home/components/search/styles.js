import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    input: {
        width: "100%",
        marginLeft: 5   ,
    },

    searchButton: {
        backgroundColor: "#008ae5ba",
        // backgroundColor: "#0099feba",
        borderRadius: 0,
        color: "white",
        '&:hover': {
            backgroundColor: "#007dcfba",
            // backgroundColor: "#0099fee3",
      },
    },

    root: {
        display: 'flex',
        height: 40,
        boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.75)",
        marginBottom: 10,
        marginTop: 10,
      },
});

export default classStyles;
