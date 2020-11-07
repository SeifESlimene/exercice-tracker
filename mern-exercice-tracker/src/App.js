// IMPORT REACT LIBRARY
import DirectionProvider, {DIRECTIONS} from "react-with-direction/dist/DirectionProvider";
import React from "react";
// IMPORT REACT ROUTER DOM BrowserRouter and Route Function
import { BrowserRouter as Router, Route } from "react-router-dom";
// IMPORT BOOTSTRAP LIBRARY
import "bootstrap/dist/css/bootstrap.min.css";
// IMPORT OUR COMPONENTS
import "./Hh.css";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
// OUR APP COMPONENT
function App() {
  return (
    <DirectionProvider direction={DIRECTIONS.RTL}>
      <Router>
        {/* CONTAINER FOR OUR APP */}
        <div className="container">
          {/* NAVBAR COMPONENT ALWAYS SHOWN */}
          <Navbar />
          <br />
          {/* WHENEVER WE HIT PATH COMPONENT WILL RENDER HERE */}
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </div>
      </Router>
    </DirectionProvider>
  );
}

// WE EXPORT OUR APP
export default App;
