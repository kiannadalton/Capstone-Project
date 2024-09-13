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
    navigate("/items");
  };

  return (
    <div>
      <h2>
        {isRegister ? "Register for an Account with" : "Welcome Back to"} The
        Cozy Cat Collective
      </h2>

      {error && <p>{error}</p>}

      <div className="authGroups">
        <div className="auth_card">
          <form>
            <label className="auth_card__label">
              Username:
              <input name="username" value={username} onChange={handleChange} />
            </label>

            <label className="auth_card__label">
              Password:
              <input
                type={!showPassword ? "password" : "text"}
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleSubmit}>
              {isRegister ? "Register" : "Login"}
            </button>

            {/* button defaults as a 'submit type' when put within a form, so need to type as 'button' type to prevent resubmitting page */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              Show Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
