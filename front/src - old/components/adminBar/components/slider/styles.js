import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
  
    color: (hidden) => ({
        transform: !hidden ? "rotate(180deg)" : "rotate(0deg)",
        // color: "white",
        color: "black",
        justifyContent: !hidden ? "flex-start" : "flex-end",
    }),

    iconStyle:{
        marginRight: 20,
        marginLeft: 20,
    },

});


export default classStyles;
