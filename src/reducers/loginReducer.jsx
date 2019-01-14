import { LOG_IN } from "../constants/actionsTypes";
import { LOG_OUT } from "../constants/actionsTypes";

const initialState = {
  isLoggedIn: true
};

export default function loginReducer(state = initialState, action) {
  if (action.type === LOG_IN) {
    return { ...state, isLoggedIn: true };
  } else if (action.type === LOG_OUT) {
    return { ...state, isLoggedIn: false };
  }
  return state;
}
