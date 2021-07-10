import React from "react";
import { Link } from "react-router-dom";


class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Ticket Scalper</h3>
                  <p>
                    A108 Adam Street <br />
                    NY 535022, USA<br /><br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> info@example.com<br />
                  </p>
                  <div className="social-links mt-3">
                    <Link to="#" className="twitter" /><i className="bx bxl-twitter" />
                    <Link to="#" className="facebook" /><i className="bx bxl-facebook" />
                    <Link to="#" className="instagram" /><i className="bx bxl-instagram" />
                    <Link to="#" className="google-plus" /><i className="bx bxl-skype" />
                    <Link to="#" className="linkedin" /><i className="bx bxl-linkedin" />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Our Company Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <Link to="#" />About Us</li>
                  <li><i className="bx bx-chevron-right" /> <Link to="#" />Press Box</li>
                  <li><i className="bx bx-chevron-right" /> <Link to="#" />Partners</li>
                  <li><i className="bx bx-chevron-right" /> <Link to="#" />Affiliates</li>
                  <li><i className="bx bx-chevron-right" /> <Link to="#" />Privacy Policy</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Questions?</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <Link to="#" />Help Center</li>
                  <li><i className="bx bx-chevron-right" /> <Link to="#" />Community</li>
                  <li><i className="bx bx-chevron-right" /> <Link to="#" />Top Cities</li>
                  <li><i className="bx bx-chevron-right" /> <Link to="#" />Gift Cards</li>
                  <li><i className="bx bx-chevron-right" /> <Link to="#" />Contact Us</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Deals to Your Inbox</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form method="post">
                  <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            © Copyright <strong><span>Ticket Scalper</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <Link to="https://bootstrapmade.com/" />Vincent Richitelli
          </div>
        </div>

        <Link to="#" className="back-to-top d-flex align-items-center justify-content-center" /><i className="bi bi-arrow-up-short" />
      </footer>
    )
  }
}

export default Footer;