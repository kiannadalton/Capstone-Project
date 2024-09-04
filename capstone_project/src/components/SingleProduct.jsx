import { useParams, useNavigate } from "react-router-dom";

// do an if statement similar to the navBar to show a version without token and with token where it shows the add comment add review

function SingleProduct() {

  const { itemId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Single Product</h2>

      {/* saving this for later when wanting to build single product page */}
      <p>
        The below buttons are placeholders for when a Single Product page is
        displayed.
      </p>
      <button onClick={() => navigate("/reviews/")}>
        Write a Review
      </button>
      <button onClick={() => navigate("/comments/")}>
        Add Comment
      </button>
    </div>
  );
}

export default SingleProduct;
