import { useGetMyReviewsQuery } from "../redux/api";

function MyReviews({token}) {

  const { data, isLoading, error } = useGetMyReviewsQuery(token);

  console.log(data);

  return (
    <div>
      <h2>My Reviews</h2>

      {isLoading ? <p>Loading...</p> : <span /> }
      
    </div>
  );
}

export default MyReviews;