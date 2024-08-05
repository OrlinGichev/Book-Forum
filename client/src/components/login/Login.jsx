import './Login.css';


export default function Login() {

    return (
        <div className="login-container">
    <form className="login-form">
      <h2 className="text-center mb-4">Login</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />       
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
      </div>
      <button type="submit" className="btn btn-primary w-100">Login</button>
      <p className="text-center mt-3">Do not have an account? <a href="#">Register</a></p>
    </form>
  </div>
    );
}