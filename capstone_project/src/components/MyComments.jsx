import { useGetMyCommentsQuery, useDeleteCommentMutation } from "../redux/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function MyComments({ token }) {
  const { data, isLoading, error, refetch } = useGetMyCommentsQuery(token);
  const comments = data?.comments;
  const [deleteComment] = useDeleteCommentMutation();
  const navigate = useNavigate();

  const removeComment = async (id) => {
    await deleteComment({ id, token });

    refetch();
  };

  // helps refresh the page after editing or adding a comment
  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h2>My Comments</h2>

      <div className="allGroups">
        {isLoading ? <p>Loading...</p> : <span />}
        {error ? <p>Oops! Something went wrong.</p> : <span />}
        <div className="myItemsContainer">
          {comments &&
            comments.map((comment) => (
              <div className="comment_card" key={comment.id}>
                <p>Posted Comment: </p>
                <p>{comment.comment}</p>
                <button
                  onClick={() =>
                    navigate(`/comments/${comment.id}`, { state: { comment } })
                  }
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    removeComment(comment.id);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MyComments;
