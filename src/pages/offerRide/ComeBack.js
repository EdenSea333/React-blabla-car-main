import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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

const ComeBack = (props) => {
  // const [currentTutorial, setCurrentTutorial] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchTitle, setSearchTitle] = useState("");
  const mediaMatch = window.matchMedia('(min-width: 768px)');
  const [matches, setMatches] = useState(mediaMatch.matches);
  const classes = useStyles();

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
    if(!sure) {
      props.history.push("/returnroute");
      return;
    }
    props.history.push("/anyother");
  };


  return (
    <div className="list mw-100">
      <ThemeProvider theme={theme}>
        <div className="text-center" style={styles.leftContainer(matches)}
        >
          <h5 className={""} style={styles.txtTitle(matches)}>
            Coming back as well? Publish your return ride now!
          </h5>

          <div className={classes.pane} style={styles.radioContainer}>
            <Paper square>
              <div className="input-group " style={{marginBottom: matches ? "1vw" : "2vw"}}>
                <button
                  className="controls form-control comebackBtn"
                  style={{...styles.btnDiv(matches)}}
                  onClick={() => btnContinueHandler(0)}
                  >Yes, sure</button>
                <span className="material-icons" style={styles.icNext(matches)}>
                navigate_next
                </span>
              </div>
              <div className="input-group " style={{marginBottom: matches ? "1vw" : "2vw"}}>
                <button
                  className="controls form-control comebackBtn"
                  style={{...styles.btnDiv(matches)}}
                  onClick={() => btnContinueHandler(1)}
                  >I’ll publish my return ride later</button>
                <span className="material-icons" style={styles.icNext(matches)}>
                navigate_next
                </span>
              </div>
            </Paper>
          </div>

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
    padding: '3%',
    width: '50vw',
    margin: '2vh auto',
  }),
  txtTitle: isRowBased => ({
    fontFamily: "Rubik",
    fontSize: "1.7vw",
    fontWeight: "650",
    letterSpacing: "-0.33px",
    marginBottom: '3vw',
    padding: '0 3.5vw',
  }),
  radioContainer: {
    width: '70%',
    margin: 'auto',
    marginBottom: '3vw',
    padding: '2vw 3vw',
    boxShadow: '0px 0px 10px 0px rgb(0 0 0 / 20%)',//, 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  icNext: isRowBased => ({ 
    fontSize: "2.5vw",
    color: "#707070",
    position: "absolute",
    zIndex: 100,
    top: "50%",
    right: "-4%",
    transform: `translate(-50%, -50%)`, 
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
}));

export default ComeBack;