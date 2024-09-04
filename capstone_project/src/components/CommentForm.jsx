import { useState } from "react";
import {
  useCreateCommentMutation } from '../redux/api';

function CommentForm({ token }) {
  const initialForm = {
    comment: "",
  };

  const [form, updateForm] = useState(initialForm);
  const [error, setError] = useState(null);
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

      const {data, error} = await createComment({token, body: form});

      if (error) {
        setError("Something went wrong. Please try again!");
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
