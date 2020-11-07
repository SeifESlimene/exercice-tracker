import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          تمريني
        </Link>
        <div className="navbar-collapse mr-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                التمارين
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                ملأ إستمارة التمرين
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link">
                أنشأ مستخدم
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
