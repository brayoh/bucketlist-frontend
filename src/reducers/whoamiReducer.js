import {
  WHOAMI_REQUEST,
  WHOAMI_SUCCESS,
  WHOAMI_FAILURE
} from "../actions/constants";
import initialState from "./defaultState";

export default function whoami(state = {}, action) {
  switch (action.type) {
    case WHOAMI_REQUEST:
      return state;
      break;

    case WHOAMI_SUCCESS:
      return Object.assign({}, state, action.payload.user)
      break;

    case WHOAMI_FAILURE:
      return Object.assign({}, state, {
        message: action.payload.message
      })
      break;
    default:
      return state;
  }
}