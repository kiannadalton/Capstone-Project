import { useGetMyCommentsQuery } from "../redux/api";

function MyComments({token}) {

      const { data, isLoading, error } = useGetMyCommentsQuery(token);

  return (
    <div>
      <h2>My Comments</h2>
      
      {isLoading ? <p>Loading...</p> : <span />}

    </div>
  );
}

export default MyComments;