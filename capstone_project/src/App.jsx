import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

//  components
import Home from "./components/Home"
import Login from "./components/Login";
import Products from "./components/Products";
import Register from "./components/Register";
import NavBar from "./components/NavBar";

function App() {
  const [token, setToken] = useState(null);
  return (
    
    <div>
      <NavBar token={token}/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register setToken={setToken}/>} />
      </Routes>
    </div>
  );
}

export default App;
