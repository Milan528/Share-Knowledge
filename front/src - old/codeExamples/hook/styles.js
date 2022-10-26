import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    color: {
        color: "white",
        "&:hover": {
            background: "#133e86",
            
        },
        display: "flex",
        "@media (max-width: 500px)" : {
            minWidth: 300,
        }
    },

    colorCondition: (color) => ({
        backgroundColor: color ? "red" : "blue",
    }),
});

export const styles = {
    buttonColor: (color) => ({
        backgroundColor: color,
    })
}

export default classStyles;