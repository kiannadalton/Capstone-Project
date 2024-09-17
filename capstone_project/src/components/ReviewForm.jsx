// works

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCreateReviewMutation } from "../redux/api";
import StarRating from "./StarRating";

function ReviewForm({ token }) {
  const { item_id } = useParams();

  const initialForm = {
    txt: "",
  };

  const [form, updateForm] = useState(initialForm);
  const [score, setScore] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [createReview] = useCreateReviewMutation();

  const handleChange = ({ target }) => {
    updateForm({ ...form, [target.name]: target.value });
  };

  const { txt } = form;

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (score === null || txt === "") {
      setError("Please fill out entire Review Form.");
      return;
    }

    const { data = {}, error } = await createReview({
      item_id,
      token,
      txt,
      score,
    });

    navigate(`/items/${item_id}`);

    if (error) {
      setError("Something went wrong. Please try again!");
      return;
    }
  };

  return (
    <div>
      <h2>Write a Review</h2>
      {error && <p>{error}</p>}
      <form>
        <label>
          Overall Rating:
          <StarRating setScore={setScore} />
        </label>

        <label>
          Add a Written Review:
          <br></br>
          <textarea name="txt" value={txt} onChange={handleChange} />
        </label>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
