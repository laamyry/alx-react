import React, { Component } from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import proptypes from "prop-types";
class App extends Component {
  constructor(props) {
    super(props);
    this.listOfCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    this.listNotifications = [
      { id: 1, value: "New course available", type: "default" },
      { id: 2, value: "New resume available", type: "urgent" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
          {isLoggedIn ? <CourseList listOfCourses={listOfCourses} /> : <Login />}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: proptypes.bool,
};
export default App;