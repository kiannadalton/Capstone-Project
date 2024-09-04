import { useGetProductsQuery } from "../redux/api";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";


function Products() {

  const { data, isLoading, error, refetch } = useGetProductsQuery();
  const navigate = useNavigate();
  const [searchParameter, setSearchParameter] = useState("");

  useEffect(() => {
    refetch();
  }, []);

  let message;

  if (isLoading) {
    return (message = "Our little virtual Elves are fetching your products!");
  }

  // Show an error message if the fetch failed
  if (error) {
    console.log(error);
    return (message = "Something went wrong! Please try again.");
  }
  // const products = data?.allItems;



    const productsToDisplay =
      searchParameter && data
        ? data?.allItems.filter((product) => {
            // parameter.keyWeWant.toLowerCase searches for the name in any case. Make sure to toLowerCase the searchParameter, as well.
            return product.name
              .toLowerCase()
              .includes(searchParameter.toLowerCase());
          })
        : data?.allItems;








  return (
    <div>
      <h2>Products</h2>

      <div>
        <SearchBar
          searchParameter={searchParameter}
          setSearchParameter={setSearchParameter}
        />
      </div>

      {isLoading ? <p>Loading...</p> : <span />}
      {error ? <p>Whoops! Something went wrong.</p> : <span />}
      <div className="allGroups">
        {productsToDisplay &&
          productsToDisplay.map((products) => (
            <div className="product_card" key={products.id}>
              <p>Product Name: {products.name}</p>
              <p>Description: {products.description}</p>
              <p>Insert Average Score Here</p>
              <button onClick={() => navigate("/items/:itemId")}>
                See Details placeholder
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
