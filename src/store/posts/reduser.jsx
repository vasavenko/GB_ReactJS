import { REQUEST_STATUS } from "../../utils/constants"
import {
  REQUEST_POSTS_FAILURE,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_LOADING,
} from "./actions"

const initialState = {
  postsList: [],
  request: {
    status: REQUEST_STATUS.IDLE,
    error: "",
  },
}

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_POSTS_LOADING:
      return {
        ...state,
        request: {
          ...state.request,
          status: REQUEST_STATUS.LOADING,
        },
      }
    case REQUEST_POSTS_SUCCESS:
      return {
        ...state,
        postsList: payload,
        request: {
          error: "",
          status: REQUEST_STATUS.SUCCESS,
        },
      }
    case REQUEST_POSTS_FAILURE:
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE,
        },
      };
    default:
      return state;
  }
};