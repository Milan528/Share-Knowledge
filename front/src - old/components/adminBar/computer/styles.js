import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
  
    color: (hidden) => ({
        transform: !hidden ? "rotate(180deg)" : "rotate(0deg)",
    }),

    filtersContainer: (hidden) => ({
        position: "relative",
        overflow: "hidden",
        minWidth: hidden ? 80 : "200px",
        transition: "0.3s ease-out",
    }),
    
    slide: (hidden) => ({
        position: "fixed",
        left: hidden ? -120 : 0,
        width: "200px",
        transition: "0.3s ease-out",
        backgroundColor: "white",
        // backgroundColor: "rgb(46, 55, 64)",
        textAlign: "right",
        height: "100%",
        borderRight : "1px solid #e0e0e0",
        boxShadow: "2px 0px 5px 0 #393a3d26",
        overflow: "auto",
    }),

    deviderColor: {
        backgroundColor: "white",
    }
});


export default classStyles;
