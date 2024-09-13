import { NavLink, useNavigate } from "react-router-dom";

function NavBar({ token, setToken }) {
  const navigate = useNavigate();

  const logoutUser = () => {
    // resets token to null so it logs user out when they click logout in the navBar
    setToken(null);
    navigate("/");
  };
  if (token) {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/items">Available Cats</NavLink>
        <NavLink to="/reviews/myreviews">My Reviews</NavLink>
        <NavLink to="/comments/mycomments">My Comments</NavLink>
        <a onClick={logoutUser}>Logout</a>
      </nav>
    );
  }

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/items">Available Cats</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}

export default NavBar;
