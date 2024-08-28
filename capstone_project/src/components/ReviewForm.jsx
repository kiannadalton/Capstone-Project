import { useState } from "react";

function ReviewForm({ token }) {
  const initialForm = {
    score: "",
    txt: "",
  };

  const [form, updateForm] = useState(initialForm);
  const [error, setError] = useState(null);

  const { score, txt } = form;

  const handleChange = ({ target }) => {
    updateForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if(score === "" || txt === ""){
        setError('Please fill out entire Review Form.')
        return;
    }
  }

  return (
    <div>
      <h2>Write a Review</h2>
      {error && <p>{error}</p>}
      <form>
        <label>
          Overall Rating:
          <input name="score" value={score} onChange={handleChange} />
        </label>

        <label>
          Add a Written Review:
          <input name="txt" value={txt} onChange={handleChange} />
        </label>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
