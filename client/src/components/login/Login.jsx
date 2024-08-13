import { Link } from "react-router-dom";

import "./Login.css";
import useForm from "../../hooks/useForm";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {

  const {loginSubmitHandler} = useContext(AuthContext);
  const [error, setError] = useState(null);

  const { values, onChange, onSubmit } = useForm(async () => {
    try {
      await loginSubmitHandler(values);
    
      setError(null);
    } catch (err) {
     
      setError(err.message);
    }
  }, {
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
  });

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmit}>
        <h2 className="text-center mb-4">Login</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name={LoginFormKeys.Email}
            id="email"
            placeholder="Enter your email"
            required
            onChange={onChange}
            value={values[LoginFormKeys.Email]}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name={LoginFormKeys.Password}
            id="password"
            placeholder="Enter your password"
            required
            onChange={onChange}
            value={values[LoginFormKeys.Password]}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
        <p className="text-center mt-3">
          Do not have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
