// IMPORT REACT LIBRARY
import React from "react";
// IMPORT AXIOS
import axios from "axios";
// CREATE OUR CreateUsers COMPONENT
export default class CreateUsers extends React.Component {
  constructor(props) {
    super(props);
    // STATE OF OUR COMPONENT
    this.state = {
      username: "",
    };
    // BIND THIS TO ALL OUR METHOD
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // THIS METHOD IS INVOKED WHENEVER WE MODIFY THE USERNAME INPUT
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  // THIS METHOD IS INVOKED WHENEVER WE SUBMIT OUT FORM
  onSubmit(e) {
    // WE CANCEL THE DEFAULT BEHAVIOR OF THE SUBMIT BUTTON
    e.preventDefault();
    // HERE CATCH OUR VALUES FROM THE STATE
    const user = {
      username: this.state.username,
    };
    // WE LOG OUR EXERCISE TO THE CONSOLE
    console.log(user);
    // SEND USER DATA TO THE BACKEND
    axios.post("http://localhost:5000/users/add", user).then((res) => {
      console.log(res.data);
    });
    // WE RETURN TO THE HOMEPAGE
    this.setState({
      username: "",
    });
  }
  render() {
    return (
      <div>
        <h3>أنشأ مستخدما جديدا</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>إسم المستخدم : </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="أضف المستخدم"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
