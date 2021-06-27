import React, { useEffect } from "react";
import { init } from "vanilla-tilt";
import "../css/Email.css";

function EmailPage() {
  useEffect(() => {
    init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);

  return (
    <div className="glass">
      <div className="emailcontainer">
        <div className="card">
          <h2>01</h2>
          <div className="emailcontent">
            <h3>Customize Email</h3>
            <p>Experience the best features for customization of emails.</p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
      <div className="emailcontainer">
        <div className="card">
          <h2>02</h2>
          <div className="emailcontent">
            <h3>Email History</h3>
            <p>See what you had sent to your users.</p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
      <div className="emailcontainer">
        <div className="card">
          <h2>03</h2>
          <div className="emailcontent">
            <h3>Email automation</h3>
            <p>Ezy automation of emails.</p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailPage;
