import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   retrieveTutorials,
//   findTutorialsByTitle,
//   deleteAllTutorials,
// } from "../../actions/tutorials";

const Boost = (props) => {
  const mediaMatch = window.matchMedia('(min-width: 768px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  // const tutorials = useSelector(state => state.tutorials);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(retrieveTutorials());
  }, []);

  const btnContinueHandler = () => {
    props.history.push("/addwaypoint");
  };

  return (
    <div className="list row mw-100">
      <div className="col-md-6 p-0">
        <div style={styles.leftContainer(matches)} >
          <h3 className={""} style={styles.txtTitle(matches)}>
            Get more with our Boost technology
          </h3>
          <img src="/assets/images/boost.png" style={styles.boostImg(matches)} alt=""/>
        </div>
      </div>
    
      <div className="col-md-6 d-flex">
        <div className="text-center" style={styles.rightContainer(matches)}
        >
          <p className={""} style={styles.txtPhase(matches)}>
            Add your preffered stopovers to aid Boost find extra passangers on your way.
          </p>

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
  );
};

const styles = {
  leftContainer: isRowBased => ({ 
    width: isRowBased ? "50vw" : "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: isRowBased ? `96vh` : '100vh',
    backgroundColor: '#EEEEEE',
    margin: `0`,
  }),
  rightContainer: isRowBased => ({ 
    border: "1px solid #707070", 
    padding: "7%",
    width: isRowBased ? "30vw" : "70vw",
    height: isRowBased ? "auto" : "auto",
    margin: isRowBased ? "auto" : "10vh auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderRadius: "3vw"}),
  btnContinue: isRowBased => ({
    height: isRowBased ? "2.5vw" : "5vw",
    width: "100%",
    borderRadius: "2em",
    color: "#FFFFFF",
    backgroundColor: "#00AEEF",
    fontFamily: "Poppins",
    fontSize: isRowBased ? "1vw" : "2vw",
  }),
  txtTitle: isRowBased => ({
    fontFamily: "Montserrat",
    fontSize: isRowBased ? "2.6vw" : "5.2vw",
    fontWeight: "650",
    alignSelf: 'center',
    textAlign: 'center',
    width: isRowBased ? "40vw" : "80vw",
    letterSpacing: "-0.33px",
    marginBottom: isRowBased ? "5vw" : "10vw",
  }),
  txtPhase: isRowBased => ({
    fontFamily: "Poppins",
    fontSize: isRowBased ? "1vw" : "2vw",
    marginBottom: isRowBased ? "3vw" : "6vw",
  }),
  boostImg: isRowBased => ({
    width: "40%",
    // height: isRowBased ? "40vw" : "60vw",
    ObjectFit: 'contain',
    alignSelf: 'center',
    // aspectRatio: '1/1',
  }),
}

export default Boost;