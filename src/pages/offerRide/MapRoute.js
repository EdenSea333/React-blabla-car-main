import React, { useState, useEffect } from "react";
import { useDispatch,
  //  useSelector
   } from "react-redux";
import {
  createTutorial, deleteAllTutorials,
} from "../../actions/tutorials";
import Paper from '@material-ui/core/Paper';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Map from '../../components/Map.js';

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

const MapRoute = (props) => {
  const mediaMatch = window.matchMedia('(min-width: 768px)');
  const [matches, setMatches] = useState(mediaMatch.matches);
  const [curRoute, setCurRoute] = React.useState("0");
  const [routes, setRoutes] = React.useState([]);
  const classes = useStyles();

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  // const tutorials = useSelector(state => state.tutorials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteAllTutorials());
    dispatch(createTutorial('start', 'ChIJ2V-Mo_l1nkcRfZixfUq4DAE'));
    dispatch(createTutorial('end', 'ChIJGaK-SZcLkEcRA9wf5_GNbuY'));
    dispatch(createTutorial('route', 0));
  });

  const handleRadioChange = (event) => {
    setCurRoute(event.target.value);
  };

  const btnContinueHandler = () => {
    props.history.push("/boost");
  };

  return (
    <div className="list row mw-100">
      <div className="col-md-6 d-flex">
      <ThemeProvider theme={theme}>
        <div className="text-center" style={styles.leftContainer(matches)}
        >
          <h5 className={""} style={styles.txtTitle(matches)}>Pick-up</h5>

          <div className="input-group " style={{marginBottom: matches ? "1vw" : "2vw"}}>
            {/* <input
              id="origin-input"
              className="controls form-control"
              type="text"
              placeholder="Enter an origin location"
              style={styles.inputSearch(matches)} /> */}
            <select id="start" className="form-control" style={styles.inputSearch(matches)}>
              <option value="ChIJ2V-Mo_l1nkcRfZixfUq4DAE">Munich, Germany</option>
              <option value="ChIJGaK-SZcLkEcRA9wf5_GNbuY">Zürich, Switzerland</option>
              <option value="ChIJgWsCh7C4VTcRwgRZ3btjpY8">Dhaka, Bangladesh</option>
              <option value="ChIJGYvdV064VTcR6CHngkEpb9Y">Dhaka New Market, Mirpur Road, Dhaka, Bangladesh</option>
              <option value="ChIJPWFe8sG4VTcR__h4xe5i1ao">Dhaka University, Dhaka, Bangladesh</option>
              <option value="ChIJz4dBR-a4VTcRIpVlVTd407M">Dhaka Medical College Hospital, Secretariat Road, Dhaka, Bangladesh</option>
            </select>

            <span className="material-icons" style={styles.icSearch(matches)}>
            search
            </span>

          </div>

          <h5 className="" style={styles.txtTitle(matches)}>Drop-off</h5>

          <div className="input-group ">
            <select id="end" className="form-control" style={styles.inputSearch(matches)} defaultValue="ChIJGaK-SZcLkEcRA9wf5_GNbuY">
              <option value="ChIJ2V-Mo_l1nkcRfZixfUq4DAE">Munich, Germany</option>
              <option value="ChIJGaK-SZcLkEcRA9wf5_GNbuY">Zürich, Switzerland</option>
              <option value="ChIJgWsCh7C4VTcRwgRZ3btjpY8">Dhaka, Bangladesh</option>
              <option value="ChIJGYvdV064VTcR6CHngkEpb9Y">Dhaka New Market, Mirpur Road, Dhaka, Bangladesh</option>
              <option value="ChIJPWFe8sG4VTcR__h4xe5i1ao">Dhaka University, Dhaka, Bangladesh</option>
              <option value="ChIJz4dBR-a4VTcRIpVlVTd407M">Dhaka Medical College Hospital, Secretariat Road, Dhaka, Bangladesh</option>
            </select>
            {/* <input
              id="destination-input"
              className="controls form-control"
              type="text"
              placeholder="Enter a destination location"
              style={styles.inputSearch(matches)}
            /> */}

            <span className="material-icons" style={styles.icSearch(matches)}>search</span>
          </div>

          <div className="" style={styles.hDivider} />

          <h5 className="" style={styles.txtTitle(matches)}>Whats your route?</h5>
          
          <div className={classes.paneTwo} style={styles.radioContainer}>
            <Paper square>
              <FormControl component="fieldset">
                <RadioGroup id="route-selector" aria-label="position" name="position"  value={curRoute} onChange={handleRadioChange}>
                  {routes.length>0 ? routes.map((route, index)=>{
                    return(
                    <FormControlLabel
                      data-index={index}
                      value={""+index}
                      key={index}
                      control={<Radio name="position" color="primary" />}
                      label={route}
                      labelPlacement="start"
                    />)
                    })
                    :
                    <></>
                  }
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
        </ThemeProvider>
      </div>
      
      <div className="col-md-6 p-0">
        <Map
          onRouteChange={setRoutes}
          currentRoute={curRoute}
        />
      </div>
    </div>
  );
};

const styles = {
  leftContainer: isRowBased => ({ 
    border: "1px solid #707070", 
    padding: "7%",
    width: isRowBased ? "35vw" : "70vw",
    // height: isRowBased ? "70vh" : "75vh",
    margin: isRowBased ? "auto" : "10vh auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderRadius: "3vw"}),
  icSearch: isRowBased => ({ 
    fontSize: isRowBased ? "1vw" : "2vw",
    color: "#707070",
    position: "absolute",
    zIndex: 100,
    top: "50%",
    left: "7%",
    transform: `translate(-50%, -50%)` 
  }),
  inputSearch: isRowBased => ({
    backgroundColor: "#F2F2F2",
    border: "none",
    height: "4vh",
    fontSize: isRowBased ? "1vw" : "2vw",
    padding: 0,
    borderRadius: "2em",
    paddingLeft: "3em",
  }),
  hDivider: {
    width: "100%",
    border: "1px solid #F2F2F2",
    margin: "3vh auto",
    height: "1px",
  },
  radioContainer: {
    margin: '3vw auto',
    maxWidth: '100%',
  },
  // lstRoutes: isRowBased => ({
  //   backgroundColor: 'transparent',
  //   border: 'none',
  //   fontSize: isRowBased ? '1vw' : "2vw",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   textAlign: "left",
  //   alignSelf: "center",
  //   height: "4em",
  //   width: "80%",
  // }),
  // btnRadio: isRowBased => ({
  //   minWidth: isRowBased ? "2vw" : "4vw",
  //   minHeight: isRowBased ? "2vw" : "4vw",
  //   width: isRowBased ? "2vw" : "4vw",
  //   height: isRowBased ? "2vw" : "4vw",
  //   backgroundColor: "#00AEEF",
  // }),
  btnContinue: isRowBased => ({
    height: "4vh",
    width: "100%",
    borderRadius: "2em",
    color: "#FFFFFF",
    backgroundColor: "#00AEEF",
    fontFamily: "Poppins",
    fontSize: "1em",
  }),
  txtTitle: isRowBased => ({
    fontFamily: "Montserrat",
    fontSize: isRowBased ? "2vw" : "4vw",
    fontWeight: "650",
    letterSpacing: "-0.33px"
  }),
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
      maxWidth: '100%',
    },
    '& .MuiSvgIcon-root': {
      width: '3vw',
      height: '3vw',
    },
    '& .MuiRadio-root': {
      color: '#00AEEF',
    },
    '& .MuiTypography-root': {
      maxWidth: '90%',
      overflowWrap: 'anywhere',
      fontSize: '1.15vw',
      fontFamily: 'Poppins',
      textAlign: 'left',
    },
    borderRadius: '1.5vw',
  },
}));

export default MapRoute;