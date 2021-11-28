import { REQUEST_POSTS_LOADING } from "./actions"

export const selectPostsList = state => state.posts.postsList
export const selectPostsLoading = state => state.posts.request.status === REQUEST_POSTS_LOADING
export const selectPostsError = state => state.posts.request.error
