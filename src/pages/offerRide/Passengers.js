import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { makeStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '1.15vw',
    fontFamily: 'Poppins',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(7),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const Passengers = (props) => {
  // const [currentTutorial, setCurrentTutorial] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchTitle, setSearchTitle] = useState("");
  const mediaMatch = window.matchMedia('(min-width: 768px)');
  const [matches, setMatches] = useState(mediaMatch.matches);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [instantly, setInstantly] = React.useState('can');
  const [number, setNumber] = React.useState(2);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const btnContinueHandler = () => {
    props.history.push("/priceperseat");
  };

  const numberChange = (num) => {
    setNumber(num);
  }

  const handleRadioChange = (event) => {
    setInstantly(event.target.value);
  };

  return (
    <div className="list mw-100">
      <ThemeProvider theme={theme}>
        <div className="text-center" style={styles.leftContainer(matches)}
        >
          <h5 className={""} style={styles.txtTitle(matches)}>
            Keep the middle seat empty so that your passengers are comfortable
          </h5>

          <div className={classes.pane} style={styles.tabContainer}>
            <Paper square>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                onChange={handleChange}
              >
                <StyledTab label="No, I'll squeeze in 3" />
                <StyledTab label="Yes, sure!" />
              </Tabs>
            </Paper>
            
            <TabPanel value={value} index={0}>
              <span style={styles.txtDesc(matches)}>So how many GoBy24 passengers can you take?</span>
              <span style={number!==2 ? styles.numCircle : styles.activeCircle} onClick={() => {numberChange(2)}}>2</span>
              <span style={number!==3 ? styles.numCircle : styles.activeCircle}  onClick={() => {numberChange(3)}}>3</span>
              <span style={number!==4 ? styles.numCircle : styles.activeCircle}  onClick={() => {numberChange(4)}}>4</span>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <span style={styles.txtDesc(matches)}>So how many GoBy24 passengers can you take?</span>
              <span style={number!==2 ? styles.numCircle : styles.activeCircle} onClick={() => {numberChange(2)}}>2</span>
              <span style={number===2 ? styles.numCircle : styles.activeCircle}  onClick={() => {numberChange(3)}}>3</span>
            </TabPanel>
          </div>
          
          <h5 className={""} style={styles.txtPhase(matches)}>
            Can passengers book instantly?
          </h5>

          <div className={classes.paneTwo} style={styles.radioContainer}>
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
  txtPhase: isRowBased => ({
    fontFamily: "Rubik",
    fontSize: "1.7vw",
    fontWeight: "650",
    letterSpacing: "-0.33px",
    marginBottom: '3vw',
    marginTop: "3vw",
  }),
  txtDesc: isRowBased => ({
    fontFamily: "Rubik",
    fontSize: "1.15vw",
    fontWeight: "650",
    marginBottom: '2vw',
    marginTop: "1.5vw",
    display: 'block',
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
  numCircle: {
    width: '3.5vw',
    height: '3.5vw',
    border: '1px solid #00AEEF',
    borderRadius: '50%',
    textAlign: 'center',
    padding: '0.6vw',
    fontFamily: "Rubik",
    fontSize: "1.5vw",
    fontWeight: "650",
    margin: "3vw 2vw",
    display: 'inline-block',
  },
  activeCircle: {
    width: '3.5vw',
    height: '3.5vw',
    border: 'none',
    backgroundColor: '#F57F20',
    borderRadius: '50%',
    textAlign: 'center',
    padding: '0.6vw',
    fontFamily: "Rubik",
    fontSize: "1.5vw",
    fontWeight: "650",
    margin: "3vw 2vw",
    display: 'inline-block',
  },
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  pane: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: '0 10%',
    borderRadius: '1.5vw',
  },
  paneTwo: {
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
      fontFamily: 'Poppins',
      textAlign: 'left',
    },
    borderRadius: '1.5vw',
  },
}));

export default Passengers;