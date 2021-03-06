import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-center">
      <div className="row d-flex mr-auto justify-content-center align-item-center imgSize">
        <div className="col-6">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="https://linkpicture.com/q/Facebook_3.png" alt="" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src="https://linkpicture.com/q/Twitter.png" alt="" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src="https://linkpicture.com/q/YouTube.png" alt="" />
          </a>
          <div className="text-white ">&copy; All right reserved 2021</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
