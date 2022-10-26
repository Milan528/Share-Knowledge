import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
  
    colorCondition: (color) => ({
        color: color ? "green" : "#15191d",
    }),

    textColor: {
        // color: "white",
        color: "black",
    },

});


export default classStyles;
