import { useGetMyReviewsQuery } from "../redux/api";

function MyReviews({token}) {

  const { data, isLoading, error } = useGetMyReviewsQuery(token);

  return (
    <div>
      <h2>My Reviews</h2>

      {isLoading ? <p>Loading...</p> : <span /> }
      
    </div>
  );
}

export default MyReviews;