import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import proptypes from "prop-types";
function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {!isLoggedIn ? <Login /> : <CourseList />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: proptypes.bool,
};

export default App;
