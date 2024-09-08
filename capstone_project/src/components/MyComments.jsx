import { useGetMyCommentsQuery, useDeleteCommentMutation } from "../redux/api";


function MyComments({token}) {

  const { data, isLoading, error, refetch } = useGetMyCommentsQuery(token);
  const comments = data?.comments;
  const [deleteComment] = useDeleteCommentMutation();

  const removeComment = async (id) => {
    await deleteComment({ id, token });

    // refetched page without fully reloading
    refetch();
  };

  return (
    <div>
      <h2>My Comments</h2>

      {isLoading ? <p>Loading...</p> : <span />}
      {error ? <p>Oops! Something went wrong.</p> : <span />}
      <div className="allGroups">
        {comments &&
          comments.map((comment) => (
            <div className="comment_card" key={comment.id}>
              <p>Posted Comment: {comment.comment}</p>
              <button>Edit</button>
              <button
              onClick={() => {removeComment(comment.id)}}
              >Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MyComments;