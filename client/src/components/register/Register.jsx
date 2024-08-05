import { Link } from 'react-router-dom';
import './Register.css';

export default function Register () {

    return (
        <div className="register-container">
    <form className="register-form">
      <h2 className="text-center mb-4">Register</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required />
      </div>
      <button type="submit" className="btn btn-primary w-100">Register</button>
      <p className="text-center mt-3">Already have an account? <Link to="/login">Login</Link></p>
    </form>
  </div>
    )
}