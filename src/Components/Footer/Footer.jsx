import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerDiv"> {/* Set className on the outer div */}
      <hr className="Line" /> {/* Place the line at the top inside the footerDiv */}
      <div>
        <img className="LogoImage" src={ process.env.PUBLIC_URL +"/habot.jpg"} alt="" />
        <dt className="Copywrite">©️ R Singhania</dt>
      </div>
      <div className="fotterButtonDiv">
        <div className="footerButtons">
          <p className="FButton">Company</p>
          <p>About</p>
          <p>FAQ</p>
        </div>
        <div className="footerButtons">
          <p className="FButton">Terms</p>
          <p>Data Privacy</p>
          <p>Accessibility</p>
        </div>
        <div className="footerButtons">
          <p className="FButton">Related</p>
          <p>Find Buyer</p>
          <p>Feedback</p>
        </div>
      </div>
      <div className="SocialMediaIcons">
        <div><i className="bi bi-linkedin"></i></div>
        <div><i className="bi bi-twitter"></i></div>
        <div><i className="bi bi-facebook"></i></div>
        <div><i className="bi bi-instagram"></i></div>
      <hr className="Lines" /> {/* Place the line at the bottom inside the footerDiv */}
      </div>
    </div>
  );
}

export default Footer;
