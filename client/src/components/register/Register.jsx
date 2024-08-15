import { Link } from "react-router-dom";
import "./Register.css";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: "email",
    Password: "password",
    ConfirmPassword: "confirmPassword"
}

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit} = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: '',

    [RegisterFormKeys.Password]: '',
    [RegisterFormKeys.ConfirmPassword]: '',
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let errors = {};

 
    if (!validateEmail(values[RegisterFormKeys.Email])) {
      errors.email = "Please enter a valid email address.";
    }


    if (values[RegisterFormKeys.Password] !== values[RegisterFormKeys.ConfirmPassword]) {
      errors.password = "Passwords do not match.";
    }

    setErrors(errors);

   
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit(event);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
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
          {errors.email && <div className="text-danger">{errors.email}</div>}
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
          {errors.password && <div className="text-danger">{errors.password}</div>}
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
