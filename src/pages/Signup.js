import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="login">
        <form className="loginf" action="">
          <h2>Signup</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
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
          <button className="loginBtn">Signup</button>
        </form>

        <p className="click">
          Already have an account? click here to
          <Link to="/Login"> login</Link>
        </p>
        <p>
          <Link to="/Newsletter">Subscribe to our newsletter</Link>
        </p>
      </div>
    </>
  );
}
