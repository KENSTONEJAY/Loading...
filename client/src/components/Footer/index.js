import React from "react";

class App extends React.Component {
    render () {
        return(
<footer id="footer">
<div classname="footer-top">
  <div classname="container">
    <div classname="row">
      <div classname="col-lg-3 col-md-6">
        <div classname="footer-info">
          <h3>Ticket Scalper</h3>
          <p>
            A108 Adam Street <br />
            NY 535022, USA<br /><br />
            <strong>Phone:</strong> +1 5589 55488 55<br />
            <strong>Email:</strong> info@example.com<br />
          </p>
          <div classname="social-links mt-3">
            <Link to="#" classname="twitter" /><i classname="bx bxl-twitter" />
            <Link to="#" classname="facebook" /><i classname="bx bxl-facebook" />
            <Link to="#" classname="instagram" /><i classname="bx bxl-instagram" />
            <Link to="#" classname="google-plus" /><i classname="bx bxl-skype" />
            <Link to="#" classname="linkedin" /><i classname="bx bxl-linkedin" />
          </div>
        </div>
      </div>
      <div classname="col-lg-2 col-md-6 footer-links">
        <h4>Our Company Links</h4>
        <ul>
          <li><i classname="bx bx-chevron-right" /> <Link to="#" />About Us</li>
          <li><i classname="bx bx-chevron-right" /> <Link to="#" />Press Box</li>
          <li><i classname="bx bx-chevron-right" /> <Link to="#" />Partners</li>
          <li><i classname="bx bx-chevron-right" /> <Link to="#" />Affiliates</li>
          <li><i classname="bx bx-chevron-right" /> <Link to="#" />Privacy Policy</li>
        </ul>
      </div>
      <div classname="col-lg-3 col-md-6 footer-links">
        <h4>Questions?</h4>
        <ul>
          <li><i classname="bx bx-chevron-right" /> <Link to="#" />Help Center</li>
          <li><i classname="bx bx-chevron-right" /> <Link to="#" />Community</li>
          <li><i classname="bx bx-chevron-right" /> <Link to="#" />Top Cities</li>
          <li><i classname="bx bx-chevron-right" /> <Link to="#" />Gift Cards</li>
          <li><i classname="bx bx-chevron-right" /> <Link to="#" />Contact Us</li>
        </ul>
      </div>
      <div classname="col-lg-4 col-md-6 footer-newsletter">
        <h4>Deals to Your Inbox</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <form action method="post">
          <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
        </form>
      </div>
    </div>
  </div>
</div>
<div classname="container">
  <div classname="copyright">
    © Copyright <strong><span>Ticket Scalper</span></strong>. All Rights Reserved
  </div>
  <div classname="credits">
    Designed by <Link to="https://bootstrapmade.com/" />Vincent Richitelli
  </div>
</div>

<Link to="#" classname="back-to-top d-flex align-items-center justify-content-center" /><i classname="bi bi-arrow-up-short" />
</footer>
        )
    }
}

export default App;