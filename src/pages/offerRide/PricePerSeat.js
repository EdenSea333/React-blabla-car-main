import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { makeStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import MuiDialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
// import {
//   retrieveTutorials,
//   findTutorialsByTitle,
//   deleteAllTutorials,
// } from "../../actions/tutorials";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00AEEF',
    },
    secondary: {
      main: '#F57F20',
    },
  },
});

const modalTitleStyles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(modalTitleStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Dialog = withStyles((theme) => ({
  // root: {
  //   backgroundColor: 'none',
  // },
  paper: {
    borderRadius: '1.5vw',
    padding: '5vw 2vw',
    maxWidth: '45vw',
    width: '40vw',
  }
}))(MuiDialog);

const PricePerSeat = (props) => {
  // const [currentTutorial, setCurrentTutorial] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchTitle, setSearchTitle] = useState("");
  const mediaMatch = window.matchMedia('(min-width: 768px)');
  const [matches, setMatches] = useState(mediaMatch.matches);
  const classes = useStyles();
  const [instantly, setInstantly] = React.useState('can');
  const [number, setNumber] = React.useState(10);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  // const tutorials = useSelector(state => state.tutorials);
  // const dispatch = useDispatch();

  // useEffect(() => {
    // dispatch(retrieveTutorials());
  // }, []);

  const btnContinueHandler = () => {
    props.history.push("/comeback");
  };

  const numberChange = (num) => {
    if (number + num === 0) return;
    setNumber(number + num);
  }

  const handleNumberChange = (event) => {
    if (!event.target.value) {
      setNumber(0);
      return;
    }
    const num = parseInt(event.target.value);
    setNumber(num > 0 ? num : 0);
  };
  
  const handleRadioChange = (event) => {
    setInstantly(event.target.value);
    if (event.target.value !== 'can') 
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="list mw-100">
      <ThemeProvider theme={theme}>
        <div className="text-center" style={styles.leftContainer(matches)}
        >
          <h5 className={""} style={styles.txtTitle(matches)}>
            This is our recommended price per seat. OK for you?
          </h5>

          <h5 className={""} style={styles.txtPhase(matches)}>
          ₹{number}
          </h5>

          <div className={classes.pane} style={styles.radioContainer}>
            <Paper square>
              <FormControl component="fieldset">
                <RadioGroup aria-label="position" name="position" defaultValue="can" value={instantly} onChange={handleRadioChange}>
                  <FormControlLabel
                    value="can"
                    control={<Radio color="primary" />}
                    label="Yes, sure"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="cannot"
                    control={<Radio color="primary" />}
                    label="No, I’ll reply to each request myself"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
          </div>
     
          <button
            className="btn btn-sm"
            style={styles.btnContinue(matches)}
            onClick={btnContinueHandler}
          >
            Continue
          </button>
        </div>

          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}>
            <DialogTitle id="customized-dialog-title" className={classes.paneTwo} onClose={handleClose} />
            <DialogContent>
              <h5 className={""} style={styles.txtModalTitle(matches)}>
                My recommended price per seat
              </h5>
              
              <div className="input-group w-50 m-auto">
                <span style={styles.numLeft} onClick={() => {numberChange(-1)}}>-</span>
                <input
                  id="origin-input"
                  className="controls form-control"
                  type="text"
                  value={number}
                  onChange={handleNumberChange}
                  style={styles.inputNumber(matches)} />
                <span style={styles.numRight} onClick={() => {numberChange(1)}}>+</span>
              </div>
            </DialogContent>
            <DialogActions>
              <button
                className="btn btn-sm"
                style={styles.btnContinue(matches)}
                onClick={handleClose}
              >
                Done
              </button>
            </DialogActions>
          </Dialog>

        <svg className="backBubble1" version="1.1">
          <circle cx="380" cy="120" r="200"
            fill="#EEF4FF"/>
        </svg>
        
        <svg className="backBubble2" version="1.1">
          <circle cx="180" cy="490" r="480"
            fill="rgba(0, 174, 239, 0.44)"/>
        </svg>
      </ThemeProvider>
    </div>
  );
};

const styles = {
  leftContainer: isRowBased => ({ 
    padding: '3%',
    width: '50vw',
    margin: '2vh auto',
  }),
  btnContinue: isRowBased => ({
    height: "2.5vw",
    width: "65%",
    borderRadius: "2em",
    color: "#FFFFFF",
    backgroundColor: "#00AEEF",
    fontFamily: "Poppins",
    fontSize: "1vw",
    margin: 'auto',
  }),
  txtTitle: isRowBased => ({
    fontFamily: "Rubik",
    fontSize: "1.7vw",
    fontWeight: "650",
    letterSpacing: "-0.33px",
    marginBottom: '3vw',
    padding: '0 3.5vw',
  }),
  txtModalTitle: isRowBased => ({
    fontFamily: "Rubik",
    fontSize: "1.7vw",
    textAlign: 'center',
    fontWeight: "500",
    letterSpacing: "-0.33px",
    marginBottom: '3vw',
    padding: '0 3.5vw',
  }),
  txtPhase: isRowBased => ({
    fontFamily: "Rubik",
    fontSize: "3.5vw",
    letterSpacing: "-0.33px",
    marginBottom: '3vw',
    marginTop: "6vw",
  }),
  tabContainer: {
    boxShadow: '0px 0px 10px 0px rgb(0 0 0 / 20%)',//, 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  radioContainer: {
    width: '70%',
    margin: 'auto',
    marginBottom: '3vw',
    padding: '2vw 3vw',
    boxShadow: '0px 0px 10px 0px rgb(0 0 0 / 20%)',//, 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  inputNumber: isRowBased => ({
    border: "1px solid #F57F20",
    width: '4vw',
    height: "2.5vw",
    fontFamily: "Rubik",
    fontSize: "1.7vw",
    textAlign: 'center',
    fontWeight: "500",
    letterSpacing: "-0.33px",
    marginBottom: '3vw',
    padding: 0,
  }),
  numLeft: {
    width: '4.5vw',
    height: '2.5vw',
    border: "1px solid #F57F20",
    backgroundColor: '#F57F20',
    textAlign: 'center',
    color: 'white',
    fontFamily: "Rubik",
    fontSize: "1.7vw",
    fontWeight: "500",
    margin: 0,
    marginLeft: 'auto',
    display: 'inline-block',
    borderTopLeftRadius: '1.3vw',
    borderBottomLeftRadius: '1.3vw',
  },
  numRight: {
    width: '4.5vw',
    height: '2.5vw',
    backgroundColor: '#F57F20',
    textAlign: 'center',
    border: "1px solid #F57F20",
    color: 'white',
    fontFamily: "Rubik",
    fontSize: "1.7vw",
    fontWeight: "500",
    margin: 0,
    borderTopRightRadius: '1.3vw',
    borderBottomRightRadius: '1.3vw',
    display: 'inline-block',
  },
}


const useStyles = makeStyles((theme) => ({
  pane: {
    flexGrow: 1,
    backgroundColor: 'white',
    '& div': {
      borderBottom: 'none !important',
    },
    '& .MuiFormControl-root': {
      width: '100%',
    },
    '& .MuiFormControlLabel-root': {
      justifyContent: 'space-between',
    },
    '& .MuiSvgIcon-root': {
      width: '3vw',
      height: '3vw',
    },
    '& .MuiRadio-root': {
      color: '#00AEEF',
    },
    '& .MuiTypography-root': {
      fontSize: '1.15vw',
      fontFamily: "Poppins",
      textAlign: 'left',
    },
    borderRadius: '1.5vw',
  },

  paneTwo: {
    flexGrow: 1,
    '& .MuiSvgIcon-root': {
      width: '2vw',
      height: '2vw',
      color: '#000',
    },
  },
}));

export default PricePerSeat;