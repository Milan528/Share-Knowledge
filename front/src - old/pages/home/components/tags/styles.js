import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    chip: {
        margin: "4px 2px 0px 2px",
        backgroundColor: "#008ae5ba",
        color: "white",
        border: "1px solid black",
    },

    deleteIconColor: {
        color: "white",
        '&:hover': {
            color: "#bdb7b7",
        },
    },

    container: {
        marginBottom: 40,
        display: "flex",
        flexWrap: "wrap"
    },

});

export default classStyles;
