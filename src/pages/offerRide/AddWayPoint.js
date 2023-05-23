import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   retrieveTutorials,
//   findTutorialsByTitle,
//   deleteAllTutorials,
// } from "../../actions/tutorials";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const AddWayPoint = (props) => {
  // const [currentTutorial, setCurrentTutorial] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchTitle, setSearchTitle] = useState("");
  const mediaMatch = window.matchMedia('(min-width: 768px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

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

  // const setActiveTutorial = (tutorial, index) => {
  //   setCurrentTutorial(tutorial);
  //   setCurrentIndex(index);
  // };

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
            Where do you prefer to meet extra passengers?
          </h5>
          
          <p className={""} style={styles.txtPhase(matches)}>
          Get more with our Boost technology<br />Add your preferred stopovers to help Boost find extra passengers on your way.
          </p>
  
          <button
            className="btn btn-sm"
            style={styles.btnAddCity(matches)}
            onClick={btnContinueHandler}
          >
            Add city
          </button>

          <div className="input-group " style={{marginBottom: matches ? "1vw" : "2vw"}}>
            <input
              id="origin-input"
              className="controls form-control"
              type="text"
              placeholder="e.g Manchester picadilly"
              style={styles.inputSearch(matches)} />
            <span className="material-icons" style={styles.icSearch(matches)}>
            navigate_before
            </span>

          </div>
          

          <ul id="route-selector" className="list-group" style={styles.lstContainer}>
            <div className="" style={styles.hDivider} />
            <li
              className={ "list-group-item active" }
              // onClick={() => setActiveTutorial(0)}
              key={0}
              style={styles.lstRoutes(matches)}
            >
              Chandragiri
              <input
                type="checkbox"
                style={styles.btnRadio(matches)}
                onChange={() => {}}
                checked
              />
            </li>
            <div className="" style={styles.hDivider} />
            <li
              className={ "list-group-item active" }
              // onClick={() => setActiveTutorial(0)}
              key={1}
              style={styles.lstRoutes(matches)}
            >
              Manchester picadilly
              <input
                type="checkbox"
                style={styles.btnRadio(matches)}
                onChange={() => {}}
              />
            </li>
          </ul>

          <button
            className="btn btn-sm"
            style={styles.btnContinue(matches)}
            onClick={btnContinueHandler}
          >
            Continue
          </button>
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
    border: "1px solid #707070", 
    padding: "7%",
    width: isRowBased ? "35vw" : "70vw",
    // height: isRowBased ? "40vw" : "80vw",
    marginRight: isRowBased ? "0":"auto",
    marginLeft: "auto",
    marginTop: isRowBased ? "12vh" : "12vh",
    marginBottom: isRowBased ? "12vh" : "12vh",
    borderRadius: "3vw",
    backgroundColor: "white",
  }),
  rightContainer: isRowBased => ({ 
    border: "1px solid #C4C4C4", 
    padding: "0 4%",
    width: isRowBased ? "25vw" : "50vw",
    // height: isRowBased ? "100vh" : "50vh",
    borderRadius: "2vw",
    margin: isRowBased ? "auto" : "10vh auto",
    marginTop: isRowBased ? "12vh" : "12vh",
    backgroundColor: "white",
  }),
  icSearch: isRowBased => ({ 
    fontSize: isRowBased ? "2vw" : "4vw",
    color: "#707070",
    position: "absolute",
    zIndex: 100,
    top: "50%",
    left: "7%",
    transform: `translate(-50%, -50%)`, 
  }),
  inputSearch: isRowBased => ({
    backgroundColor: "#F2F2F2",
    border: "none",
    height: isRowBased ? "2.5vw" : "5vw",
    fontSize: isRowBased ? "1vw" : "2vw",
    borderRadius: "2em",
    padding: 0,
    paddingLeft: "3em",
  }),
  hDivider: {
    width: "100%",
    border: "1px solid #F2F2F2",
    margin: "0vh auto",
    height: "1px",
  },
  lstContainer: {
    marginBottom: "1vw",
  },
  lstRoutes: isRowBased => ({
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: isRowBased ? '1vw' : "2vw",
    display: "flex",
    color: 'black',
    margin: 0,
    fontFamily: 'Poppins',
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    alignSelf: "center",
    height: "3em",
    width: "80%",
    padding: 0,
  }),
  btnRadio: isRowBased => ({
    minWidth: isRowBased ? "1.5vw" : "3vw",
    minHeight: isRowBased ? "1.5vw" : "3vw",
    width: isRowBased ? "1.5vw" : "3vw",
    height: isRowBased ? "1.5vw" : "3vw",
    border: '1px solid #00AEEF',
    borderRadius: '50%',
    // backgroundColor: '#00AEEF',
    WebkitAppearance: 'none',
    outline: 'none',
    cursor: 'pointer',
  }),
  btnContinue: isRowBased => ({
    height: isRowBased ? "2.5vw" : "5vw",
    width: "100%",
    borderRadius: "2em",
    color: "#FFFFFF",
    backgroundColor: "#00AEEF",
    fontFamily: "Poppins",
    fontSize: isRowBased ? "1vw" : "2vw",
  }),
  btnAddCity: isRowBased => ({
    height: isRowBased ? "2.5vw" : "5vw",
    width: "30%",
    alignSelf: 'center',
    borderRadius: "2em",
    color: "#000000",
    backgroundColor: "#00AEEF",
    fontFamily: "Poppins",
    fontSize: isRowBased ? "1vw" : "2vw",
    marginBottom: isRowBased ? "3vw" : "6vw",
  }),
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
  txtPhase: isRowBased => ({
    fontFamily: "Poppins",
    fontSize: isRowBased ? "1vw" : "2vw",
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

export default AddWayPoint;