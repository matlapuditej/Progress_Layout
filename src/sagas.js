import myProject from "./sagas/myProject.sagas";
import { fork } from "redux-saga/effects";
export default function*() {
  yield [fork(myProject)];
}
