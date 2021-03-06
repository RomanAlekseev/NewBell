import { ADD_ORGANIZATION } from "../constants/actionsTypes";
import { DELETE_ORGANIZATION } from "../constants/actionsTypes";
import { CHANGE_ORGANIZATION } from "../constants/actionsTypes";

const initialState = {
  organization: [
    {
      id: 1,
      title: "Zodiac",
      address: "ул.Московская 2а",
      inn: "1111-2222-3333"
    }
  ]
};

export default function orgReducer(state = initialState, action) {
  // switch (action.type) {
  //   case ADD_ORGANIZATION:
  //     return [...state, action.payload];
  // }
  if (action.type === ADD_ORGANIZATION) {
    return { ...state, organization: [...state.organization, action.payload] };
    // return Object.assign({}, state, {
    //   organization: state.organization.concat(action.payload)
    // });
  } else if (action.type === DELETE_ORGANIZATION) {
    return {
      ...initialState,
      organization: [
        ...state.organization.slice(0, action.payload),
        ...state.organization.slice(action.payload + 1)
      ]
    };
    // return Object.assign({}, state, {
    //   organization: state.organization.splice(action.payload, 1)
    // });
  } else if (action.type === CHANGE_ORGANIZATION) {
    return {
      ...initialState,
      organization: [
        ...state.organization.slice(0, action.payload.number),
        action.payload.dataOrg,
        ...state.organization.slice(action.payload.number + 1)
      ]
    };
  }
  return state;
}
