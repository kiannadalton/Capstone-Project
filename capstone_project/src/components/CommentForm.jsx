import { useState } from "react";

function CommentForm({ token }) {
  const initialForm = {
    comment: "",
  };

  const [form, updateForm] = useState(initialForm);
  const [error, setError] = useState(null);

  const { comment } = form;

  const handleChange = ({ target }) => {

    updateForm({ ...form, [target.name]: target.value });
  };

    const handleSubmit = (evt) => {
      evt.preventDefault();

      if (comment === "") {
        setError("Please fill out entire Comment Form.");
        return;
      }
    };

  return (
    <div>
      <h2>Add a Comment</h2>
      {error && <p>{error}</p>}

      <form>
        <label>
          Add a Comment:
          <input name="comment" value={comment} onChange={handleChange} />
        </label>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
