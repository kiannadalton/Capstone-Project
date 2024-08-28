import { useGetProductsQuery } from "../redux/api";

function Products() {

  const { data, isLoading, error } = useGetProductsQuery();

  return (
    <div>
      <h2>Products</h2>

      {isLoading ? <p>Loading...</p> : <span />}
      {error ? <p>Whoops! Something went wrong.</p> : <span />}
      <button>Button</button>
    </div>
  );
}

export default Products;
