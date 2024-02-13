import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    expect(shallow(<App />)).toBeDefined();
  });
  it("should render Notifications component", () => {
    expect(component.contains(<Notifications />)).toBe(true);
  });
  it("should render Header component", () => {
    expect(shallow(<App />).contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    expect(shallow(<App />).contains(<Login />)).toBe(true);
  });
  it("should render Footer component", () => {
    expect(shallow(<App />).contains(<Footer />)).toBe(true);
  });
});
