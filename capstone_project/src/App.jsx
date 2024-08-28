import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

//  components
import Home from "./components/Home"
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import AuthForm from "./components/AuthForm";

function App() {
  const [token, setToken] = useState(null);
  return (
    
    <div>
      <NavBar token={token}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<AuthForm setToken={setToken}/>} />
        <Route path="/register" element={<AuthForm setToken={setToken}/>} />
      </Routes>
    </div>
  );
}

export default App;
