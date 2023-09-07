import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="login">
        <form className="loginf" action="">
          <h2>Login</h2>
          <div>
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="loginBtn">Login</button>
        </form>

        <p className="click">
          Don't have an account? click here to
          <Link to="/Signup"> signup</Link>
        </p>
        <p>
          <Link to="/Newsletter">Subscribe to our newsletter</Link>
        </p>
      </div>
    </>
  );
}
