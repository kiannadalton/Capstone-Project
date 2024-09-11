import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import { useGetSingleProductQuery } from "../redux/api";

// do an if statement similar to the navBar to show a version without token and with token where it shows the add comment add review

function SingleProduct({ token }) {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [reviewSelected, setReviewSelected] = useState(null);

  const {
    data = {},
    error,
    isLoading,
    refetch,
  } = useGetSingleProductQuery(itemId);

  // helps refresh after adding a review
  useEffect(() => {
    refetch();
  }, []);

  const product = data.itemId;
  const allReviews = product?.reviews;

  // adds average rating
  let average =
    allReviews?.reduce((total, review) => {
      return total + review.score;
    }, 0) / allReviews?.length;

  let message;

  if (isLoading) {
    return (message = "Tiny virtual moths are fetching this product!");
  }

  // Show an error message if the fetch failed
  if (error) {
    console.log(error);
    return (message = "Something went wrong! Please try again.");
  }

  if (reviewSelected) {
    return <ReviewForm product={reviewSelected} />;
  }

  // // figure out how to make token work
  if (token) {
    return (
      <div className="allGroups">
        <div className="single_product_card">
          <h3> {product.name} </h3>
          <p>Average Rating: {average.toFixed(1)} </p>
          <p>{product.description}</p>
          {/* <button onClick={() => navigate("/reviews/reviewform")}>
          Write a Review
        </button> */}
          <button onClick={() => navigate(`/items/${product.id}/review`)}>
            Write a Review
          </button>
        </div>

        <div className="sp_review_card">
          <h3>All Reviews:</h3>
        </div>

        <div className="single_pro_review_div">
          {product.reviews &&
            product.reviews.map((review) => (
              <div className="sp_review_card" key={review.id}>
                <p>Score: {review.score.toFixed(1)}</p>
                <p>Review: {review.txt}</p>
                <button
                  onClick={() => navigate(`/comments/review/${review.id}`)}
                >
                  Add Comment
                </button>
                {/* adding comments to reviews */}
                <h3>Comments:</h3>
                <div>
                  {review.comments &&
                    review.comments.map((comment) => (
                      <div className="sp_review_card_comments" key={comment.id}>
                        <p>Comment: {comment.comment}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          ;
        </div>
      </div>
    );
  }

  // Below shows non-logged in user view
  return (
    <div className="allGroups">
      <div className="single_product_card">
        <h3> {product.name} </h3>
        <p>Average Rating: {average.toFixed(1)} Stars</p>
        <p>{product.description}</p>
      </div>

      <div className="sp_review_card">
        <h3>All Reviews:</h3>
      </div>

      <div className="single_pro_review_div">
        {product.reviews &&
          product.reviews.map((review) => (
            <div className="sp_review_card" key={review.id}>
              <p>Score: {review.score.toFixed(1)}</p>
              <p>Review: {review.txt}</p>
              {/* adding comments to reviews */}
              <h3>Comments:</h3>
              <div>
                {review.comments &&
                  review.comments.map((comment) => (
                    <div className="sp_review_card_comments" key={comment.id}>
                      <p>Comment: {comment.comment}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        ;
      </div>
    </div>
  );
}

export default SingleProduct;
