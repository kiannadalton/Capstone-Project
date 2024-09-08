import { useGetMyReviewsQuery, useDeleteReviewMutation } from "../redux/api";

function MyReviews({token}) {

  const { data, isLoading, error, refetch } = useGetMyReviewsQuery(token);
  const reviews = data?.review;

  const [deleteReview] = useDeleteReviewMutation();

  const removeReview = async (id) => {
    await deleteReview({ id, token });

    // refetched page without fully reloading
    refetch();
  };

  return (
    <div>
      <h2>My Reviews</h2>

      {isLoading ? <p>Loading...</p> : <span />}
      {error ? <p>Oops! Something went wrong.</p> : <span />}

      <div className="allGroups">
        {reviews &&
          reviews.map((review) => (
            <div className="review_card" key={review.id}>
              <p>Score: {review.score}</p>
              <p>Review: {review.txt}</p>
              <button>Edit</button>
              <button
              onClick={() => {removeReview(review.id)}}
              >Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MyReviews;