import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

//  components
import Home from "./components/Home"
import Products from "./components/Products";
import MyReviews from "./components/MyReviews";
import MyComments from "./components/MyComments";
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
        <Route path="/login" element={<AuthForm setToken={setToken} />} />
        <Route path="/register" element={<AuthForm setToken={setToken} />} />
        <Route path="/reviews" element={<MyReviews token={token} />} />
        <Route path="/comments" element={<MyComments token={token} />} />
      </Routes>
    </div>
  );
}

export default App;
