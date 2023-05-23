import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   retrieveTutorials,
//   findTutorialsByTitle,
//   deleteAllTutorials,
// } from "../../actions/tutorials";
import Accordion from '@material-ui/core/Accordion';
import Avatar from '@material-ui/core/Avatar';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PetsIcon from '@material-ui/icons/Pets';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from "@material-ui/core/styles";

const FindRideMain = (props) => {
  // const [currentTutorial, setCurrentTutorial] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchTitle, setSearchTitle] = useState("");
  const mediaMatch = window.matchMedia('(min-width: 768px)');
  const [matches, setMatches] = useState(mediaMatch.matches);
  const [smoke, setSmoke] = useState(false);
  const [pet, setPet] = useState(false);
  const [number, setNumber] = React.useState(1);
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

  const btnSmokeHandler = () => {
    setSmoke(!smoke);
  };

  const btnPetHandler = () => {
    setPet(!pet);
  };

  const numberChange = (num) => {
    setNumber(num);
  }

  const btnContinueHandler = () => {
    props.history.push("/pickuptime");
  };

  const btnViewMapHandler = () => {
    props.history.push("/viewmap");
  };


  return (
    <div className="list row mw-100">
      <div className={"col-md-6"}>
        <div className="text-center" style={styles.leftContainer(matches)}
        >
          <h5 className={""} style={styles.txtTitle(matches)}>
            Find a ride
          </h5>

          <div style={styles.leftPan(matches)}>
            <div className="input-group ">
              <input
                id="leaving-input"
                className="controls form-control"
                type="text"
                placeholder="Leaving from"
                style={styles.inputSearch(matches)} />
            </div>

            <div className="input-group ">
              <input
                id="going-input"
                className="controls form-control"
                type="text"
                placeholder="Going to"
                style={styles.inputSearch(matches)} />
            </div>

            <button
              className="btn btn-sm"
              style={{...styles.btnContinue(matches), ...styles.btnDate(matches)}}
              onClick={btnContinueHandler}
            >
              Journey Date
            </button>

            <div className={matches ? classes.root : classes.mobile_root}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Number of seats to book</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div style={styles.numContainer}>
                    <span style={{...styles.numCircle(matches), ...(number===1 ? styles.activeCircle : '')}} onClick={() => {numberChange(1)}}>1</span>
                    <span style={{...styles.numCircle(matches), ...(number===2 ? styles.activeCircle : '')}} onClick={() => {numberChange(2)}}>2</span>
                    <span style={{...styles.numCircle(matches), ...(number===3 ? styles.activeCircle : '')}}  onClick={() => {numberChange(3)}}>3</span>
                    <span style={{...styles.numCircle(matches), ...(number===4 ? styles.activeCircle : '')}}  onClick={() => {numberChange(4)}}>4</span>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography >Advanced Options</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div style={styles.iconsContainer(matches)}>
                    <div style={styles.iconItem(matches)} onClick={btnSmokeHandler}>
                      <div className={smoke ? classes.active : ''}>
                      <Avatar>
                        <SmokingRoomsIcon />
                      </Avatar>
                      </div>
                      <span style={styles.iconText(matches)}>Smoker</span>
                    </div>
                    <div style={styles.iconItem(matches)} onClick={btnPetHandler}>
                      <div className={pet ? classes.active : ''}>
                      <Avatar>
                        <PetsIcon />
                      </Avatar>
                      </div>
                      <span style={styles.iconText(matches)}>Ride with pet</span>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>

            <button
              className="btn btn-sm"
              style={styles.btnContinue(matches)}
              onClick={btnContinueHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      
      <div className="col-md-6 p-0">
        <div className="d-flex justify-content-around" style={styles.rightContainer(matches)}>
          <div style={styles.timelineContainer(matches)}>
            <Timeline>
              <TimelineItem style={styles.timelineItem(matches)}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Munich</TimelineContent>
              </TimelineItem>
              <TimelineItem style={styles.timelineItem(matches)}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Chandragiri</TimelineContent>
              </TimelineItem>
              <TimelineItem style={styles.timelineItem(matches)}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Manchester</TimelineContent>
              </TimelineItem>
              <TimelineItem style={styles.timelineItem(matches)}>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Zürich</TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-sm"
              style={styles.btnViewMap(matches)}
              onClick={btnViewMapHandler}
            >
              View map
            </button>
          </div>
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
    </div>
  );
};

const styles = {
  leftContainer: isRowBased => ({ 
    width: isRowBased ? "35vw" : "70vw",
    // height: isRowBased ? "40vw" : "80vw",
    marginRight: isRowBased ? "0":"auto",
    marginLeft: "auto",
    marginTop: isRowBased ? "12vh" : "12vh",
    marginBottom: isRowBased ? "12vh" : "12vh",
  }),
  leftPan: isRowBased => ({ 
    border: "1px solid #707070", 
    borderRadius: "3vw",
    padding: "7%",
    width: "100%",
    marginTop: 0,
    backgroundColor: "white",
  }),
  rightContainer: isRowBased => ({ 
    border: "1px solid #C4C4C4", 
    borderRadius: "2vw",
    padding: "0 4%",
    width: isRowBased ? "25vw" : "50vw",
    // height: isRowBased ? "100vh" : "50vh",
    margin: isRowBased ? "auto" : "10vh auto",
    marginTop: isRowBased ? "12vh" : "12vh",
    backgroundColor: "white",
  }),
  inputSearch: isRowBased => ({
    backgroundColor: "#F2F2F2",
    border: "none",
    height: isRowBased ? "2.5vw" : "5vw",
    fontSize: isRowBased ? "1vw" : "2vw",
    borderRadius: "2em",
    padding: 0,
    paddingLeft: "1.5em",
    marginBottom: '1.5vw',
  }),
  hDivider: {
    width: "100%",
    border: "1px solid #F2F2F2",
    margin: "0vh auto",
    height: "1px",
  },
  btnContinue: isRowBased => ({
    height: isRowBased ? "2.5vw" : "5vw",
    width: "100%",
    borderRadius: "2em",
    color: "#FFFFFF",
    backgroundColor: "#00AEEF",
    fontFamily: "Poppins",
    fontSize: isRowBased ? "1vw" : "2vw",
  }),
  btnDate: isRowBased => ({
    color: "#2E2E2E",
    backgroundColor: "#FFF",
    border: "1px solid #707070", 
    borderRadius: isRowBased ? "3vw" : "6vw",
    marginBottom: isRowBased ? "1.5vw" : "3vw",
  }),
  iconsContainer: isRowBased => ({
    // backgroundColor: 'yellow',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
  }),
  iconItem: isRowBased => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  iconText: isRowBased => ({
    fontFamily: 'Poppins',
    fontSize: isRowBased ? '0.8vw' : '1.6vw',
  }),
  numContainer: {
    width: '100%',
    padding: '0 0.5vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  numCircle:isRowBased => ({
    width: '3.5vw',
    height: '3.5vw',
    border: '1px solid #00AEEF',
    borderRadius: '50%',
    textAlign: 'center',
    padding: '0.6vw',
    fontFamily: "Rubik",
    fontSize: "1.5vw",
    fontWeight: "650",
    margin: "1vw",
    display: 'inline-block',
  }),
  activeCircle: {
    border: 'none',
    backgroundColor: '#F57F20',
  },
  btnViewMap: isRowBased => ({
    height: isRowBased ? "2.5vw" : "5vw",
    width: "100%",
    alignSelf: 'center',
    borderRadius: "2em",
    color: "#FFF",
    padding: '0 0.8rem',
    backgroundColor: "#00AEEF",
    fontFamily: "Poppins",
    fontSize: isRowBased ? "1vw" : "2vw",
    // marginBottom: isRowBased ? "3vw" : "6vw",
  }),
  txtTitle: isRowBased => ({
    fontFamily: "Montserrat",
    fontSize: isRowBased ? "2vw" : "4vw",
    fontWeight: "650",
    letterSpacing: "-0.33px"
  }),
  timelineContainer: isRowBased => ({
    marginTop: "2vw",
    marginLeft: "-2rem",
    fontSize: isRowBased ? "1vw" : "2vw",
  }),
  timelineItem: isRowBased => ({
    alignSelf: 'flex-start',
    minHeight: isRowBased ? '5vw' : '10vw',
  }),
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& .MuiAccordion-root': {
      border: '1px solid rgb(112, 112, 112)',
      borderRadius: '2vw',
      marginBottom: '1.5vw !important',
    },
    '& .MuiAccordionSummary-root': {
      minHeight: 0,
      height: '2.5vw',
    },
    '& .MuiTypography-root': {
      fontSize: '1.15vw',
      margin: 'auto',
      fontFamily: 'Poppins',
    },
    '& .MuiAvatar-root': {
      width: '4vw',
      height: '4vw',
    },
    '& .MuiSvgIcon-root': {
      width: '3vw',
      height: '3vw',
    },
    '& .MuiAccordionDetails-root': {
      paddingTop: '2.5vw',
      paddingBottom: '1vw',
    }
  },
  mobile_root: {
    width: '100%',
    '& .MuiAccordion-root': {
      border: '1px solid rgb(112, 112, 112)',
      borderRadius: '4vw',
      marginBottom: '3vw !important',
    },
    '& .MuiAccordionSummary-root': {
      minHeight: 0,
      height: '5vw',
    },
    '& .MuiTypography-root': {
      fontSize: '2.3vw',
      margin: 'auto',
      fontFamily: 'Poppins',
    },
    '& .MuiAvatar-root': {
      width: '8vw',
      height: '8vw',
    },
    '& .MuiSvgIcon-root': {
      width: '6vw',
      height: '6vw',
    },
    '& .MuiAccordionDetails-root': {
      paddingTop: '5vw',
      paddingBottom: '2vw',
    }
  },
  active: {
    '& .MuiAvatar-root': {
      backgroundColor: '#F57F20',
    }
  },
}));

export default FindRideMain;