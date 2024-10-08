// works

import { useState } from "react";
import { useCreateCommentMutation } from "../redux/api";
import { useParams, useNavigate } from "react-router-dom";

function CommentForm({ token }) {
  const { review_id } = useParams();
  const initialForm = {
    comment: "",
  };

  const [form, updateForm] = useState(initialForm);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [createComment] = useCreateCommentMutation();

  const { comment } = form;

  const handleChange = ({ target }) => {
    updateForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (comment === "") {
      setError("Please fill out entire Comment Form.");
      return;
    }

    const { data, error } = await createComment({
      review_id,
      token,
      body: form,
    });
    if (error) {
      setError("Something went wrong. Please try again!");
      return;
    }

    navigate("/items");
  };

  return (
    <div>
      <h2>Add a Comment</h2>
      {error && <p>{error}</p>}

      <form>
        <label>
          Add a Comment:
          <br></br>
          <textarea
            className="comment_textarea"
            name="comment"
            value={comment}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
