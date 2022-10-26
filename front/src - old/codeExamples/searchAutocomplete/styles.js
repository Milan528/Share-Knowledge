import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    autocompleteWidth: {
        width: "100%"
    },

    searchButton: {
        flexGrow: 1,
        backgroundColor: "#0099fe",
        '&:hover': {
          backgroundColor: "#3498db",
      },
    },

    root: {
        display: 'flex',
        width: 600,
        height: 47,
      },

    divider: {
      height: 28,
      margin: 4,
    },
});

export default classStyles;
