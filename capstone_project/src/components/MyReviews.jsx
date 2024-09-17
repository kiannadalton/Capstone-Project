import { useGetMyReviewsQuery, useDeleteReviewMutation } from "../redux/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function MyReviews({ token }) {
  const { data, isLoading, error, refetch } = useGetMyReviewsQuery(token);
  const reviews = data?.review;
  const [deleteReview] = useDeleteReviewMutation();
  const navigate = useNavigate();

  const removeReview = async (id) => {
    await deleteReview({ id, token });

    refetch();
  };

  // helps refresh after editing or posting a review
  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h2>My Reviews</h2>

      <div className="allGroups">
        {isLoading ? <p>Loading...</p> : <span />}
        {error ? <p>Oops! Something went wrong.</p> : <span />}

        <div className="myItemsContainer">
          {reviews &&
            reviews.map((review) => (
              <div className="review_card" key={review.id}>
                <p>Score: {review.score} Stars</p>
                <p>Review: </p>
                <p>{review.txt}</p>
                <button
                  onClick={() =>
                    navigate(`/reviews/${review.id}`, { state: { review } })
                  }
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    removeReview(review.id);
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

export default MyReviews;
