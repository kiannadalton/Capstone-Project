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
          <img src={product.img_url} alt={product.name} />
          <div>
            <h3> Meet {product.name}! </h3>
            <p>Average Rating: {average.toFixed(1)} </p>
            <p>{product.name} Bio:</p>
            <p>{product.description}</p>
            <p>Overview of Cat Rental Service:</p>
            <p>
              Our rental cats offer a blend of companionship, calmness, and
              professionalism. They are well-groomed, clean, and arrive on time,
              ready to enhance your day with their soothing presence. Whether
              you need a quiet companion for relaxation or a playful friend to
              lift your spirits, our cats are trained to adapt to your needs.
              You can expect them to bring a sense of comfort and joy to your
              home while revitalizing your mood. Each rental cat provides an
              uplifting and refreshing experience, making them the perfect
              temporary companion.
            </p>

            <button onClick={() => navigate(`/items/${product.id}/review`)}>
              Write a Review
            </button>
          </div>
        </div>

        <div className="sp_review_card">
          <h3>All Reviews:</h3>
        </div>

        <div className="single_pro_review_div">
          {product.reviews &&
            product.reviews.map((review) => (
              <div className="sp_review_card" key={review.id}>
                <p>Valued Cat-stomer</p>
                <p>Rating: {review.score.toFixed(0)} Stars</p>
                <p>Review: </p>
                <p>{review.txt}</p>
                <button
                  onClick={() => navigate(`/comments/review/${review.id}`)}
                >
                  Add Comment
                </button>
                {/* adding comments to reviews */}
                <h4>Comments:</h4>
                <div>
                  {review.comments &&
                    review.comments.map((comment) => (
                      <div className="sp_review_card_comments" key={comment.id}>
                        <p>Comment:</p>
                        <p>{comment.comment}</p>
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
        <img src={product.img_url} alt={product.name} />
        <div>
          <h3> Meet {product.name}! </h3>
          <p>Average Rating: {average.toFixed(1)} </p>
          <p>{product.name} Bio:</p>
          <p>{product.description}</p>
          <p>Overview of Cat Rental Service:</p>
          <p>
            Our rental cats offer a blend of companionship, calmness, and
            professionalism. They are well-groomed, clean, and arrive on time,
            ready to enhance your day with their soothing presence. Whether you
            need a quiet companion for relaxation or a playful friend to lift
            your spirits, our cats are trained to adapt to your needs. You can
            expect them to bring a sense of comfort and joy to your home while
            revitalizing your mood. Each rental cat provides an uplifting and
            refreshing experience, making them the perfect temporary companion.
          </p>

          <button onClick={() => navigate("/login")}>
            Log In to Write a Review
          </button>
        </div>
      </div>

      <div className="sp_review_card">
        <h3>All Reviews:</h3>
      </div>

      <div className="single_pro_review_div">
        {product.reviews &&
          product.reviews.map((review) => (
            <div className="sp_review_card" key={review.id}>
              <p>Valued Cat-stomer</p>
              <p>Rating: {review.score.toFixed(0)} Stars</p>
              <p>Review: </p>
              <p>{review.txt}</p>
              {/* adding comments to reviews */}
              <h4>Comments:</h4>
              <div>
                <button onClick={() => navigate("/login")}>
                  Log In to Comment
                </button>
                {review.comments &&
                  review.comments.map((comment) => (
                    <div className="sp_review_card_comments" key={comment.id}>
                      <p>Comment:</p>
                      <p>{comment.comment}</p>
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
