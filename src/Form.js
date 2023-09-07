import React, { useState } from "react";

export default function Form({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email");
    }

    onSubmit(email);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError(null);
  };

  return (
    <main>
      <form className="newsletter" onSubmit={handleSubmit}>
        <div>
          <label>Email address</label>
          {error && <span className="error">{error}</span>}
        </div>
        <input
          className={error ? "error-input" : ""}
          type="email"
          placeholder="email@company.com"
          value={email}
          onChange={handleInputChange}
        />
        <button className="btn" type="submit">
          Subscribe to monthly newsletter
        </button>
      </form>
    </main>
  );
}
