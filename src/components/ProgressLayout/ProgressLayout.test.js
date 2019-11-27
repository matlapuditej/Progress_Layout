import React from "react";
import ProgressLayout from "./ProgressLayout";
import { shallow, mount } from "enzyme";
import "../../utils/setupTests";
import { Provider } from "react-redux";
import { store } from "../../store";

it("renders without crashing", () => {
  // let store ={};
  let props = {
    progressData: {
      title: "Task Status",
      summary: [
        {
          title: "Completed",
          value: 2
        },
        {
          title: "On Target",
          value: 155
        }
      ],
      total: 160
    }
  };
  store.getState().myproject = {
    userData: {}
  };
  let wrapper = mount(
    <Provider store={store}>
      <ProgressLayout {...props} />
    </Provider>
  );
  expect(wrapper.find(".ProgressLayout").length).toBe(1);
});

describe("ProgerssLayout Card", () => {
  let props = {
    progressData: {
      title: "Task Status",
      summary: [
        {
          title: "Completed",
          value: 2
        },
        {
          title: "On Target",
          value: 155
        }
      ],
      total: 160
    }
  };
  store.getState().myproject = {
    userData: {}
  };
  let wrapper = mount(
    <Provider store={store}>
      <ProgressLayout {...props} />
    </Provider>
  );
  it("should have header", () => {
    expect(wrapper.find("Card .header").length).toBe(1);
  });
  it("should have CircularProgressbar", () => {
    expect(wrapper.find(".CircularProgressbar").length).toBe(1);
  });
  it("should have footer section", () => {
    expect(wrapper.find(".ProgressLayout__footer").length).toBe(2);
  });
  it("should have footerTitle", () => {
    expect(wrapper.find(".ProgressLayout__footerTitle").length).toBe(2);
  });
  it("should have footerValue", () => {
    expect(wrapper.find(".ProgressLayout__footerValue").length).toBe(2);
  });
});
