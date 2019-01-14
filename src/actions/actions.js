import { LOG_IN } from "../constants/actionsTypes";
import { LOG_OUT } from "../constants/actionsTypes";
import { ADD_ORGANIZATION } from "../constants/actionsTypes";
import { DELETE_ORGANIZATION } from "../constants/actionsTypes";
import { CHANGE_ORGANIZATION } from "../constants/actionsTypes";

export function addOrganization(payload) {
  return { type: ADD_ORGANIZATION, payload };
}
export function deleteOrganization(payload) {
  return { type: DELETE_ORGANIZATION, payload };
}
export function changeOrganization(payload) {
  return { type: CHANGE_ORGANIZATION, payload };
}

export function logIn(payload) {
  return { type: LOG_IN, payload };
}
export function logOut(payload) {
  return { type: LOG_OUT, payload };
}
