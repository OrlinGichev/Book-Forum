import { Link } from "react-router-dom";
import "./Register.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: "email",
    // Username: "username",
    Password: "password",
    ConfirmPassword: "confirmPassword"
}

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit} = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: '',
    // [RegisterFormKeys.Username]: '',
    [RegisterFormKeys.Password]: '',
    [RegisterFormKeys.ConfirmPassword]: '',
  });

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={onSubmit}>
        <h2 className="text-center mb-4">Register</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            onChange={onChange}
            value={values[RegisterFormKeys.Email]}
            placeholder="Enter your email"
            required
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            onChange={onChange}
            value={values[RegisterFormKeys.Username]}
            placeholder="Enter your username"
            required
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            onChange={onChange}
            value={values[RegisterFormKeys.Password]}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            id="confirmPassword"
            onChange={onChange}
            value={values[RegisterFormKeys.ConfirmPassword]}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
