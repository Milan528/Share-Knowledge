import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    chip: {
        margin: "4px 2px 0px 2px",
        // backgroundColor: "#0099feba",
        backgroundColor: "#000000d6",
        color: "white",
    },

    deleteIconColor: {
        color: "white",
        '&:hover': {
            color: "#bdb7b7",
        },
    },

    container: {
        marginBottom: 10,
        marginTop: 20,
        display: "flex",
        flexWrap: "wrap"
    },

});

export default classStyles;
