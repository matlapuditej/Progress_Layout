import { types as myprojectTypes } from "../actions/myproject.actions";

export default (state = "", action) => {
  switch (action.type) {
    case myprojectTypes.MYPROJECT_RECEIVE_DATA:
      let userData = action.data;
      console.log(userData, "REDUCER");
      return {
        ...state,
        userData
      };

    default:
      return state;
  }
};
