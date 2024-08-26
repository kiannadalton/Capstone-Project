import { useState } from "react";
import { useRegisterMutation} from '../redux/api';

function Register({setToken}) {

    const initialForm = {
        username: "",
        password: "",
    }

    const [form, updateForm] = useState(initialForm);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [register] = useRegisterMutation();

    const { username, password } = form;

    const handleChange = ({target}) => {
        // removed error message when user begins typing in inputs again
        setError(null);
        updateForm({...form, [target.name]: target.value});
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(form);

        if(form.username === "" || form.password === ""){
            setError('Please provide a username and password.');
            return;
        }

        const { data, error } = await register(form);
        
        if(error){
            setError(error);
            return;
        }
        setToken(data.token);
    }

  return (
    <div>
      <h2>Register for an Account with Krafted by Kianna</h2>
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
        <button onClick={handleSubmit}>Register</button>
      </form>
      <button onClick={() => setShowPassword(!showPassword)}>
        Show Password
      </button>
    </div>
  );
}

export default Register;
