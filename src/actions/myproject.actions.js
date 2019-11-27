export const types = {
  MYPROJECT_GET_DATA: "MYPROJECT_GET_DATA",
  MYPROJECT_RECEIVE_DATA: "MYPROJECT_RECEIVE_DATA"
};

export const actions = {
  getMyProjectData: () => ({ type: types.MYPROJECT_GET_DATA }),
  receiveMyProjectData: data => ({ type: types.MYPROJECT_RECEIVE_DATA, data })
};
