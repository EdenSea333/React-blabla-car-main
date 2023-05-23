import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});

export const googleAPIKey = "AIzaSyD2NVhCGOQphMEo2ay2kBS15Whqki-hjHo";