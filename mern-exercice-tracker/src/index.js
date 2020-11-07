import DirectionProvider, {
  DIRECTIONS,
} from "react-with-direction/dist/DirectionProvider";
// IMPORT REACT LIBRARY
import React from "react";
// IMPORT REACTDOM LIBRARY
import ReactDOM from "react-dom";
// IMPORT OUR APP COMPONENT
import App from "./App";
// RENDER OUR APP INSIDE THE ROOT
ReactDOM.render(
  <DirectionProvider direction={DIRECTIONS.RTL}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DirectionProvider>,
  document.getElementById("root")
);
