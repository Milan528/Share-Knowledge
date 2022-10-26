import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    submit: {
        border: "1px solid black",
        '&:hover': {
            boxShadow: "0px 0.5px 1px 0px rgba(0,0,0,0.75)",   
            backgroundColor: "#000000d6",
        },
        minWidth: 116,
        marginLeft: 10,
        marginRight: 5,
        marginTop: 20,
    },
    
    fontStyle: {
        color: "white",
        textTransform: 'none',
    },

});

export const styles = {
    buttonColor: (disabled) => ({
        backgroundColor: disabled ? "#b1b1b1" : "black"
    })
}

export default classStyles;
