import React from "react";
import Home from "./Home";
import { shallow, mount } from "enzyme";
import "../../utils/setupTests";
import { Provider } from "react-redux";
import { store } from "../../store";
import data from "../../utils/mockData";

it("renders without crashing", () => {
  // let store ={};
  let props = {
    getMyProjectData: jest.fn(),
    userValues: {}
  };
  store.getState().myproject = {
    userData: {}
  };
  let wrapper = mount(
    <Provider store={store}>
      <Home {...props} />
    </Provider>
  );
  expect(wrapper.find(".Home").length).toBe(1);
});

it("Should have Home container", () => {
  // let store ={};
  let props = {
    getMyProjectData: jest.fn(),
    userValues: {}
  };
  store.getState().myproject = {
    userData: {}
  };
  let wrapper = mount(
    <Provider store={store}>
      <Home {...props} />
    </Provider>
  );
  expect(wrapper.find(".Home__container").length).toBe(1);
});

it("Should have ProgressLayout compoents", () => {
  // let store ={};
  let props = {
    getMyProjectData: jest.fn(),
    userValues: {}
  };
  store.getState().myproject = {
    userData: {}
  };
  let wrapper = mount(
    <Provider store={store}>
      <Home {...props} />
    </Provider>
  );
  expect(wrapper.find("ProgressLayout").length).toBe(4);
});
