import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

//  components
import Home from "./components/Home";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import MyReviews from "./components/MyReviews";
import ReviewForm from "./components/ReviewForm";
import MyComments from "./components/MyComments";
import CommentForm from "./components/CommentForm";
import NavBar from "./components/NavBar";
import AuthForm from "./components/AuthForm";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Products />} />
        <Route path="/items/:itemId" element={<SingleProduct />} />

        <Route path="/login" element={<AuthForm setToken={setToken} />} />
        <Route path="/register" element={<AuthForm setToken={setToken} />} />
        <Route path="/reviews/" element={<MyReviews token={token} />} />
        <Route path="/comments/" element={<MyComments token={token} />} />

        {/* ask Jessica why it needs the reviewId and itemId to populate pages */}
        <Route path="/comments/" element={<CommentForm token={token} />} />
        <Route path="/reviews/" element={<ReviewForm token={token} />} />
      </Routes>
    </div>
  );
}

export default App;
