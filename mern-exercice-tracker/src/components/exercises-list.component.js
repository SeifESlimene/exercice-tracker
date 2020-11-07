// IMPORT REACT LIBRARY
import React from "react";
// IMPORT Link Function From react-router-dom LIBRARY
import { Link } from "react-router-dom";
// IMPORT AXIOS
import axios from "axios";

const Exercise = (props) => {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + props.exercise._id}>تعديل</Link> |{" "}
        <a
          href="/"
          onClick={() => {
            props.deleteExercise(props.exercise._id);
          }}
        >
          حذف
        </a>
      </td>
    </tr>
  );
};

// CREATE OUR COMPONENT
export default class ExercisesList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = { exercises: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => this.setState({ exercises: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }
  deleteExercise(id) {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((currentexercise, indexexercise) => {
      return (
        <Exercise
          key={indexexercise}
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>التمارين المتوفرة</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>إسم المستخدم</th>
              <th>الوصف</th>
              <th>المدة</th>
              <th>التاريخ</th>
              <th>المهام</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
  
}
