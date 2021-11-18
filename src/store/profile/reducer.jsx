import { CHANGE_NAME, TOGGLE_CHECKBOX } from "./action" 

const initialState = {
  checkbox: false,
  name: 'def name'
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        checkbox: !state.checkbox,
      }
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      }
    default:
      return state
  }
}