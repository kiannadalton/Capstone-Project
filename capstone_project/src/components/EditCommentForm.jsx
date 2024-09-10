// works

import { useState } from "react";
import { useUpdateCommentMutation } from "../redux/api";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function EditCommentForm({ token }) {
  const { id } = useParams();

  const location = useLocation();

  // imports info from selected edit comment on My Comments page
  const editingComment = location.state.comment;

  const initialForm = {
    comment: editingComment?.comment,
  };

  const [form, updateForm] = useState(initialForm);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [updateComment] = useUpdateCommentMutation();

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

    const { data, error } =  await updateComment({
          id,
          token,
          body: form,
        });

    if (error) {
      setError("Something went wrong. Please try again!");
      return;
    }

    navigate("/comments/mycomments");
  };

  return (
    <div>
      <h2>Edit Comment</h2>
      {error && <p>{error}</p>}

      <form>
        <label>
          Edit Comment
          <input name="comment" value={comment} onChange={handleChange} />
        </label>

        <button onClick={handleSubmit}>
          Update Comment
        </button>
      </form>
    </div>
  );
}

export default EditCommentForm;
