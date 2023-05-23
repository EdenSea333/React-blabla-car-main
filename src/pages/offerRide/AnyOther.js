import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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


const AnyOther = (props) => {
  // const [currentTutorial, setCurrentTutorial] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchTitle, setSearchTitle] = useState("");
  const mediaMatch = window.matchMedia('(min-width: 768px)');
  const [matches, setMatches] = useState(mediaMatch.matches);
  const classes = useStyles();
  const [value, setValue] = React.useState('Hello I’m going to visit my family. Itravel with a cat and I have a lot of spae i the boot.');

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

  const btnContinueHandler = (sure) => {
    alert('Current Info');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="list mw-100">
      <ThemeProvider theme={theme}>
        <div className="text-center" style={styles.leftContainer(matches)}
        >
          <h5 className={""} style={styles.txtTitle(matches)}>
            Anything to add about your ride?
          </h5>

            <div className={classes.root}>
              <TextField
                label=""
                multiline
                rowsMax={4}
                value={value}
                onChange={handleChange}
                variant="outlined"
              />
            </div>

            <button
              className="btn btn-sm"
              style={styles.btnContinue(matches)}
              onClick={btnContinueHandler}
            >
              Publish ride
            </button>
        </div>

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
    padding: '6% 3%',
    width: '60vw',
    margin: '2vh auto',
  }),
  txtTitle: isRowBased => ({
    fontFamily: "Rubik",
    fontSize: "1.7vw",
    fontWeight: "650",
    letterSpacing: "-0.33px",
    marginBottom: '4vw',
    padding: '0 3.5vw',
  }),
  btnContinue: isRowBased => ({
    height: "2.5vw",
    width: "50%",
    borderRadius: "2em",
    color: "#FFFFFF",
    backgroundColor: "#00AEEF",
    fontFamily: "Poppins",
    fontSize: "1vw",
    margin: 'auto',
  }),
  btnDiv: isRowBased => ({
    border: "none",
    height: "4.5vw",
    fontSize: "1vw",
    borderRadius: "2em",
    padding: 0,
    textAlign: 'left',
    paddingLeft: "2em",
  }),
}


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50vw',
      marginBottom: '3vw',
    },
    '& .MuiInputBase-root': {
      backgroundColor: '#EEE',
      minHeight: '15vw',
      alignItems: 'flex-start',
      borderRadius: '2vw',
      fontFamily: 'Poppins',
      fontSize: '1vw',
      textAlign: 'left',
      padding: '2vw',
    },
    '& .MuiInputBase-input' : {
      color: 'rgba(46, 46, 46, 0.3)',
    }
  },
}));

export default AnyOther;