import { useGetMyCommentsQuery } from "../redux/api";

function MyComments({token}) {

      const { data, isLoading, error } = useGetMyCommentsQuery(token);
      const comments = data?.comments;



  return (
    <div>
      <h2>My Comments</h2>

      {isLoading ? <p>Loading...</p> : <span />}
      {error ? <p>Oops! Something went wrong.</p> : <span />}
      <div className="allGroups">
        {comments &&
          comments.map((comment) => (
            <div className="comment_card">
              <p>Posted Comment: {comment.comment}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MyComments;