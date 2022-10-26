import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
  
    color: (hidden) => ({
        transform: !hidden ? "rotate(180deg)" : "rotate(0deg)",
        color: "white",
    }),

    deviderColor: {
        backgroundColor: "white",
    },

    filtersContainer: (hidden) => ({
        position: "relative",
        overflow: "hidden",
        minWidth: hidden ? 100 : "200px",
        transition: "0.3s ease-out",
    }),
    
    slide: (hidden) => ({
        position: "absolute",
        left: hidden ? -100 : 0,
        width: "200px",
        transition: "0.3s ease-out",
        backgroundColor: "#2e3740",
        textAlign: "right",
        height: "100%",
        color: "white",
    }),

});


export default classStyles;
