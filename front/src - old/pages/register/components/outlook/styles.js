import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    button: {
        backgroundColor: "white",
        border: "solid black 0.5px",
        '&:hover': {
            backgroundColor: "white",
        },
        // width: "50%",
        marginBottom: 20,
        flexGrow: 1,
    },

    image: {
        marginRight: 10,     
    }

   

});

export default classStyles;
