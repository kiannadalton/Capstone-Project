import { useNavigate } from "react-router-dom";

function SingleProduct() {

  const navigate = useNavigate();

  return (
    <div>
      <h2>Single Product</h2>

      {/* saving this for later when wanting to build single product page */}
      <p>
        The below buttons are placeholders for when a Single Product page is
        displayed.
      </p>
      <button onClick={() => navigate("/reviews/:itemId")}>
        Write a Review
      </button>
      <button onClick={() => navigate("/comments/:reviewId")}>
        Add Comment
      </button>
    </div>
  );
}

export default SingleProduct;
