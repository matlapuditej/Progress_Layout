// import {delay} from 'redux-saga'
import { put, takeEvery, cancel } from "redux-saga/effects";
import { actions as myprojectActions } from "../actions/myproject.actions";
import { types as myprojectTypes } from "../actions/myproject.actions";
import data from "../utils/mockData";
// ...

// Our worker Saga: will perform the async increment task
export function* callProjectData() {
  try {
    yield put(myprojectActions.receiveMyProjectData(data));
  } catch (e) {
    console.error("SAGA FAILED:", e);
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function* myProject() {
  yield takeEvery(myprojectTypes.MYPROJECT_GET_DATA, callProjectData);
}
