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
      <h2>Find Your Purrfect Partner!</h2>

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
              <img src={products.img_url} alt={products.name} />
              <p>Name: {products.name}</p>
              <p>
                {(
                  products.reviews?.reduce((total, review) => {
                    return total + review.score;
                  }, 0) / products.reviews?.length
                ).toFixed(1)}{" "}
                Stars
              </p>
              {console.log("product", products)}

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
