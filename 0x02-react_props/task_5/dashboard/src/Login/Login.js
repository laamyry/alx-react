import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="Login">
        <div className="App-Login">
          <p>Login to access the full dashboard</p>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email"></input>
            <label htmlFor="passwd">Password:</label>
            <input type="password" id="passwd"></input>
            <button id="okBtn">OK</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
