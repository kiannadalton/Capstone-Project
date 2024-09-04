import { useGetMyReviewsQuery } from "../redux/api";

function MyReviews({token}) {

  const { data, isLoading, error } = useGetMyReviewsQuery(token);

  const reviews = data?.review;

  console.log(data);

  return (
    <div>
      <h2>My Reviews</h2>

      {isLoading ? <p>Loading...</p> : <span />}
      {error ? <p>Oops! Something went wrong.</p> : <span />}

      <div className="allGroups">
        {reviews &&
          reviews.map((review) => (
            <div className="review_card">
              <p>Score: {review.score}</p>
              <p>Review: {review.txt}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MyReviews;