import { useState } from "react";

function StarRating({ setScore}) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [totalStars, setTotalStars] = useState(5);

  const handleChange = (currentRating) => {
    setRating(currentRating);
    setScore(currentRating);
  };

  return (
    <div id="star-rating">
      {[...Array(totalStars)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              key={star}
              type="radio"
              name="rating"
              value={currentRating}
              onChange={() => handleChange(currentRating)}
            />
            <span
              className="star"
              style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
      <p id="rating-total">
        Your rating is: <br />
        {rating} / 5
      </p>
    </div>
  );
}

export default StarRating;