import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import "./utils/setupTests";

it("renders without crashing", () => {
  let wrapper = mount(<App />);
  expect(wrapper.find("Home").length).toBe(1);
});
