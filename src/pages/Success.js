import React, { useState } from "react";
import success from "../images/icon-success.svg";

export default function Success({ email, onDismiss }) {
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss();
  };

  if (dismissed) {
    return null;
  }

  return (
    <main>
      <div className="main">
        <div className="success">
          <img src={success} alt="" />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to
            <span> {email}</span>. Please open it and click the button inside to
            confirm your subscription.
          </p>
          <button className="btn dismiss-btn" onClick={handleDismiss}>
            Dismiss message
          </button>
        </div>
      </div>
    </main>
  );
}
