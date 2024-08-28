import { useGetProductsQuery } from "../redux/api";
import { useNavigate } from "react-router-dom";


function Products() {

  const { data, isLoading, error } = useGetProductsQuery();
  const navigate = useNavigate();

  const products = data?.allItems;
  console.log(data);
  return (
    <div>
      <h2>Products</h2>

      {isLoading ? <p>Loading...</p> : <span />}
      {error ? <p>Whoops! Something went wrong.</p> : <span />}

      {products &&
        products.map((products) => (
          <div key={products.id}>
            <p>Product Name: {products.name}</p>
            <p>Description: {products.description}</p>
            <p>Insert Average Score Here</p>
            <button onClick={() => navigate("/items/:itemId")}>See Details placeholder</button>
          </div>

        ))
      }


    </div>
  );
}

export default Products;
