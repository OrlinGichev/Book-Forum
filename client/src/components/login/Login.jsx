import { Link } from "react-router-dom";

import "./Login.css";
import useForm from "../../hooks/useForm";

export default function Login() {
  const { value, onChange, onSubmit } = useForm({
    email: '',
    password: '',
  });

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmit}>
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            onChange={onChange}
            value={value.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
            onChange={onChange}
            value={value.password}
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
