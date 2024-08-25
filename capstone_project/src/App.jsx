import "./App.css";
import { Route, Routes } from "react-router-dom";

//  components
import Home from "./components/Home"
import Login from "./components/Login";
import Products from "./components/Products";
import Register from "./components/Register";
import NavBar from "./components/NavBar";

function App() {
  
  return (
    
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
