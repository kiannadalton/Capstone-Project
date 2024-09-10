import { useGetProductsQuery } from "../redux/api";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
// import SingleProduct from "./SingleProduct";

function Products() {
  const { data, isLoading, error, refetch } = useGetProductsQuery();
  const [productSelected, setProductSelected] = useState(null);
  // const navigate = useNavigate();
  const [searchParameter, setSearchParameter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);


  let message;

  if (isLoading) {
    return (message = "Tiny virtual moths are fetching your products!");
  }

  // Show an error message if the fetch failed
  if (error) {
    console.log(error);
    return (message = "Something went wrong! Please try again.");
  }
  // const products = data?.allItems;

  // if (productSelected){
  //   return <SingleProduct products={productSelected}/>;
  // }

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
              <p>Average Rating: </p>

              <button onClick={() => navigate(`/items/${products.id}`)}>
                See Details
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
