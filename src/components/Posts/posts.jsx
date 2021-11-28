import { useEffect } from "react";
import { CircularProgress } from '@mui/material'
import Button from '@mui/material/Button'
import { selectPostsError, selectPostsList, selectPostsLoading } from '../../store/posts/selectors'
import { getPosts } from "../../store/posts/actions";
import { useDispatch, useSelector } from "react-redux";


export const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectPostsList)
  const isLoading = useSelector(selectPostsLoading)
  const error = useSelector(selectPostsError)

const requestPosts = async () => {
  dispatch(getPosts())
}

  useEffect(() => {
    requestPosts()
// eslint-disable-next-line
  }, [])

  return (
    <>
      <h3>Posts</h3>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Button variant="outlined" onClick={requestPosts}>Request</Button>
          {!!error &&<h4>ERROR: {error}</h4>}
          <ul>
            {posts.map((post) =>(
              <li key={post.id}>{post.title} <br /> {post.body}</li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}