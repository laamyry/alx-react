import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer test", () => {
  it("should render without crashing", () => {
    expect(shallow(<Footer />).exists()).toEqual(true);
  });
  it("should render the text Copyright", () => {
    expect(shallow(<Footer />).text()).toEqual(
      `Copyright ${getFullYear()} - ${getFooterCopy()}`
    );
  });
});
