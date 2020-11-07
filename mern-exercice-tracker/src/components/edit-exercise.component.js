// IMPORT REACT LIBRARY
import React from "react";
// IMPORT AXIOS
import axios from "axios";
// IMPORT REACT DATEPICKER LIBRARY
import DatePicker from "react-datepicker";
// IMPORT THE CSS RELATIVE TO DATEPICKER LIBRARY
import "react-datepicker/dist/react-datepicker.css";
// CREATING OUR CreateExercises COMPONENT
export default class EditExercises extends React.Component {
  constructor(props) {
    super(props);
    // STATE OF OUR COMPONENT
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
    // BIND THIS TO ALL OUR METHOD
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // THIS METHOD WILL BE INVOKED BEFORE REACT RENDERING THE COMPONENT
  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date),
        });
      });
    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  // THIS METHOD IS INVOKED WHENEVER WE MODIFY THE USERNAME INPUT
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  // THIS METHOD IS INVOKED WHENEVER WE MODIFY THE DESCRIPTION INPUT
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  // THIS METHOD IS INVOKED WHENEVER WE MODIFY THE DURATION INPUT
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  // THIS METHOD IS INVOKED WHENEVER WE MODIFY THE DATE INPUT
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  // THIS METHOD IS INVOKED WHENEVER WE SUBMIT OUT FORM
  onSubmit(e) {
    // WE CANCEL THE DEFAULT BEHAVIOR OF THE SUBMIT BUTTON
    e.preventDefault();
    // HERE CATCH OUR VALUES FROM THE STATE
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    // WE LOG OUR EXERCISE TO THE CONSOLE
    console.log(exercise);
    // SEND EXERCISE DATA TO THE BACKEND
    axios.post("http://localhost:5000/exercises/update/"+this.props.match.params.id, exercise).then((res) => {
      console.log(res.data);
    });
    // WE RETURN TO THE HOMEPAGE
    window.location = "/";
  }
  // HERE WE RENDER THE COMPONENT
  render() {
    return (
      <div>
        {/* SIMPLE HEADING 3 TEXT FOR THE USER TO DESCRIBE WHAT IS THIS FORM ABOUT */}
        <h3>تعديل إستمارة التمرين</h3>
        {/* OUR FORM */}
        <form onSubmit={this.onSubmit}>
          {/* THIS DIV FOR GROUPING THE DROPDOWN SELECT INSIDE */}
          <div className="form-group">
            {/* LABEL FOR DROPDOWN SELECT */}
            <label>إسم المستخدم :</label>
            {/* OUR DROPDOWN SELECT */}
            <select
              // I DON'T KNOW YET WHAT THE REF IS FOR!
              // useref="userInput"
              // IT'S REQUIRED
              required
              // TO SAY THAT IT'S AN ELEMENT OF THE FORM
              className="form-control"
              // THE VALUE OF THE INPUT FIELD
              value={this.state.username}
              // HERE WE CALL OUR BELOVED METHOD
              onChange={this.onChangeUsername}
            >
              {/* HERE WE LOOP INSIDE EACH USER AND CONSTRUCT OUR DROPDOWN SELECT WITH USERS */}
              {this.state.users.map((user, index) => {
                return (
                  <option key={index} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>الوصف :</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>المدة (بالدقائق) :</label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>التاريخ :</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="تعديل التمرين"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
