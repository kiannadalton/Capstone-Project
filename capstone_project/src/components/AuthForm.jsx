// for Register and Login

import { useState } from "react";
import { useRegisterMutation, useLoginMutation } from "../redux/api";
import { useLocation, useNavigate } from "react-router-dom";

function AuthForm({ setToken }) {
  const initialForm = {
    username: "",
    password: "",
  };

  const [form, updateForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [register] = useRegisterMutation();
  const [login] = useLoginMutation();
  const location = useLocation();
  const navigate = useNavigate();

  const isRegister = location.pathname === "/register";

  const { username, password } = form;

  const handleChange = ({ target }) => {
    // removed error message when user begins typing in inputs again
    setError(null);
    updateForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(form);

    if (form.username === "" || form.password === "") {
      setError("Please provide a username and password.");
      return;
    }

    const { data, error } = isRegister
      ? await register(form)
      : await login(form);

    if (error) {
      setError(error.data.message);
      return;
    }
    setToken(data.token);
    navigate("/items")
  };

  return (
    <div>
      <h2>
        {isRegister ? "Register for an Account with" : "Welcome Back to"} Krafted by
        Kianna
      </h2>
      {error && <p>{error}</p>}
      <form>
        <label>
          Username:
          <input name="username" value={username} onChange={handleChange} />
        </label>

        <label>
          Password:
          <input
            type={!showPassword ? "password" : "text"}
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>{isRegister ? 'Register' : 'Login'}</button>
      </form>
      <button onClick={() => setShowPassword(!showPassword)}>
        Show Password
      </button>
    </div>
  );
}

export default AuthForm;
