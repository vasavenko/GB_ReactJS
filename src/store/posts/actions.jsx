import { apiUrl } from "../../utils/constants";

export const REQUEST_POSTS_LOADING = "POSTS::REQUEST_LOADING"
export const REQUEST_POSTS_SUCCESS = "POSTS::REQUEST_SUCCESS"
export const REQUEST_POSTS_FAILURE = "POSTS::REQUEST_FAILURE"

export const getPostsLoading = () => ({
  type: REQUEST_POSTS_LOADING
})
export const getPostsSuccess = (posts) => ({
  type: REQUEST_POSTS_SUCCESS,
  payload: posts
})
export const getPostsFailure = (err) => ({
  type: REQUEST_POSTS_FAILURE,
  payload: err
})

export const getPosts = () => async (dispatch) => {
  dispatch(getPostsLoading())
  try {
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error("not ok")
    }

    const result = await response.json()

    dispatch(getPostsSuccess(result))
  } catch (err) {
    console.warn(err)
    dispatch(getPostsFailure(err.message))
  }
}