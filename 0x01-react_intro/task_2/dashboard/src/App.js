import { getFullYear, getFooterCopy } from "./utils.js";
import "./App.css";
import logo from "./logo.jpg";
function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <hr />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="text" id="email"></input>
        <label htmlFor="passwd">Password</label>
        <input type="password" id="passwd"></input>
        <button>ok</button>
      </div>

      <div className="App-footer">
        <hr />
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </>
  );
}
export default App;
