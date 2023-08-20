import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
            <h4>About Us</h4>
            <p>
              We make our own buttery pie crust from scratch and use a blend of
              herbs and spices to season the filling. The result is a rich,
              savory pie that's perfect for a cozy night in
            </p>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <h4>Contact Information</h4>
            <ul className="list-unstyled">
              <li>
                <FaEnvelope className="me-2" />
                example@example.com
              </li>
              <li>123 Main Street, City</li>
              <li>Country, Postal Code</li>
            </ul>
          </div>
          <div className="col-lg-4 text-center">
            <h4>Connect With Us</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light me-3"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light me-3"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light me-3"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="mb-0">©2023 Ahnaf Alve. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
