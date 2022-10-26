import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
   
    // photo: {
    //     border: "solid 1px",
    //     marginBottom: 20,
    //     marginRight: 5,
    // },

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginBottom: 20,
        // backgroundColor: theme.palette.background.paper,
      },
      imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
      title: {
        // color: theme.palette.primary.light,
      },
      titleBar: {
        background: "white"
        //   'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },

});

export default classStyles;
