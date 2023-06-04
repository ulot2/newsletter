import mImg from "./images/illustration-sign-up-mobile.svg";
import dImg from "./images/illustration-sign-up-desktop.svg";
import list from "./images/icon-list.svg";
import Form from "./Form";
import { useState } from "react";
import Success from "./pages/Success";

function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const handleFormSubmit = (submittedEmail) => {
    setEmail(submittedEmail);
    setShowSuccess(true);
  };

  const handleDismiss = () => {
    setShowSuccess(false);
    setEmail("");
  };

  return (
    <>
      {!showSuccess ? (
        <div className="container">
          <div>
            <img src={window.innerWidth > 900 ? dImg : mImg} alt="" />
          </div>
          <div className="subscribe">
            <h1>Stay updated!</h1>
            <p>Join 60, 000+ product managers receiving monthly updates on:</p>
            <div className="list">
              <img src={list} alt="" />
              <span>Product discovery and building what matters</span>
            </div>
            <div className="list">
              <img src={list} alt="" />
              <span>Measuring to ensure updates are a success</span>
            </div>
            <div className="list">
              <img src={list} alt="" />
              <span>And much more!</span>
            </div>
            <Form onSubmit={handleFormSubmit} />
          </div>
        </div>
      ) : (
        <Success email={email} onDismiss={handleDismiss} />
      )}
    </>
  );
}

export default App;
