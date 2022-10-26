import { makeStyles } from '@material-ui/styles';
// import image from '../../assets/background.jpg';

const classStyles = makeStyles({
    rootContainer: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        // backgroundImage: `url(${image})`,
        // backgroundAttachment: "fixed",
    },
    
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        minWidth: 250,
        width: "50%",
        "@media (max-width: 650px)" : {
            width: "90%",
        },
    },
});

export default classStyles;
