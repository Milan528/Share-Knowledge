import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    color: {
        color: "white",
        display:"flex", 
        textTransform: 'none',
        marginLeft: 10,
        "&:hover": {
            backgroundColor: "#25282ca6",
        },
    },

});

export default classStyles;
