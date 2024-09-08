import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import { useGetSingleProductQuery } from "../redux/api";

// do an if statement similar to the navBar to show a version without token and with token where it shows the add comment add review

function SingleProduct({token}) {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [reviewSelected, setReviewSelected] = useState(null);

  const { data = {}, error, isLoading } = useGetSingleProductQuery(itemId);

  const product = data.itemId;

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
  if (token){
  return (
    <div className="allGroups">
      <div className="single_product_card">
        <h3> {product.name} </h3>
        <p>Average Rating: </p>
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
              <p>Score: {review.score}</p>
              <p>Review: {review.txt}</p>
              <button onClick={() => navigate("/comments/commentform")}>
                Add Comment
              </button>{" "}
            </div>
          ))}
      </div>
    </div>
  );
}

  // Below shows non-logged in user view
  return (
    <div className="allGroups">
      <div className="single_product_card">
        <h3> {product.name} </h3>
        <p>Average Rating: </p>
        <p>{product.description}</p>
      </div>

      <div className="sp_review_card">
        <h3>All Reviews:</h3>
      </div>

      <div className="single_pro_review_div">
        {product.reviews &&
          product.reviews.map((review) => (
            <div className="sp_review_card" key={review.id}>
              <p>Score: {review.score}</p>
              <p>Review: {review.txt}</p>
            </div>
          ))}
      </div>
    </div>
  );
} 

export default SingleProduct;
