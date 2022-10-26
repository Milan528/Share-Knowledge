import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
      imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },

      icon: {
        "&:hover": {
          color: "white",
        },
      },

      iconButton: {
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },

      root: {
        position: "initial",
        marginBottom: 0,
        opacity: 1,
      },

      container: {
        marginBottom: 20,
      }

});

export default classStyles;
