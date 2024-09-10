
import { useState } from "react";
import { useUpdateReviewMutation } from "../redux/api";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

function EditReviewForm({ token }) {
  const { id } = useParams();

  const location = useLocation();

//   imports info from selected edit review on My Reviews page
  const editingReview = location.state.review;

  const initialForm = {
    txt: editingReview?.txt,
    score: editingReview?.score
  };

  const [form, updateForm] = useState(initialForm);
  const [score, setScore] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [updateReview] = useUpdateReviewMutation();

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

    const { data = {}, error } = await updateReview({
      id,
      token,
      txt,
      score,
    });

    navigate("/reviews/myreviews");

    if (error) {
      setError("Something went wrong. Please try again!");
      return;
    }
  };

  return (
    <div>
      <h2>Edit Your Review</h2>
      {error && <p>{error}</p>}
      <form>
        <label>
          Overall Rating:
          <StarRating setScore={setScore} />
        </label>
        <p>Your original rating was: <br></br>
            {editingReview.score} / 5</p>
        <label>
          Edit Written Review:
          <input name="txt" value={txt} onChange={handleChange} />
        </label>

        <button onClick={handleSubmit}>Update Review</button>
      </form>
    </div>
  );
}

export default EditReviewForm;
