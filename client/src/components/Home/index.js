import React from "react";
{/* <img src={process.env.PUBLIC_URL + '/img/logo.png'} />; */}
// import img from "../../img/giants.jpg"


class App extends React.Component {
render (){
    return(
        <div>
        <p />
        <div>
          {/* <img src={img} alt="TicketScalper Logo"/> */}
          <header id="header" classname="fixed-top d-flex align-items-center" />
          <div classname="container d-flex align-items-center">
            <h1 classname="logo me-auto"><link href="index.html" />Ticket Scalper</h1>
            {/* Uncomment below if you prefer to use an image logo */}
            <link href="index.html" classname="logo me-auto" /><img src="assets/img/logo.png" alt="" classname="img-fluid" />
            <nav id="navbar" classname="navbar">
              <ul>
                <li><link href="index.html" classname="active" />Home</li>
                <li classname="dropdown"><link href="#" /><span>Location</span> <i classname="bi bi-chevron-down" />
                  <ul>
                    <li><link href="about.html" />Local</li>
                    <li><link href="team.html" />United States</li>
                  </ul>
                </li>
                <li><link href="services.html" />Sports</li>
                <li><link href="portfolio.html" />Concerts</li>
                <li><link href="pricing.html" />Theater &amp; Comedy</li>
                <li><link href="blog.html" />Top Events</li>
                <li><link href="contact.html" />Sell Tickets</li>
                <li classname="dropdown"><link href="#" /><span>My Account</span> <i classname="bi bi-chevron-down" />
                  <ul>
                    <li><link href="portfolio-details.html" />Dashboard</li>
                    <li><link href="testimonials.html" />Log In</li>
                  </ul>
                  <i classname="bi bi-list mobile-nav-toggle" />
                </li></ul></nav>{/* .navbar */}
          </div>
          {/* End Header */}
          {/* ======= Events Section ======= */}
          <section id="hero">
            <div id="heroCarousel" data-bs-interval={5000} classname="carousel slide carousel-fade" data-bs-ride="carousel">
              <ol classname="carousel-indicators" id="hero-carousel-indicators" />
              <div classname="carousel-inner" role="listbox">
                {/* Slide 1 */}
                <div classname="carousel-item active" style={{backgroundImage: 'url(assets/img/summerslam.jpg)'}}>
                  <div classname="carousel-container">
                    <div classname="container">
                      <h2 classname="animate__animated animate__fadeInDown"><span>HOTTEST SUMMER EVENTS</span></h2>
                      <link href="#about" classname="btn-get-started animate__animated animate__fadeInUp scrollto" />Experience It Live
                    </div>
                  </div>
                </div>
                {/* Slide 2 */}
                <div classname="carousel-item" style={{backgroundImage: 'url(assets/img/yankees.jpg)'}}>
                  <div classname="carousel-container">
                    <div classname="container">
                      <h2 classname="animate__animated animate__fadeInDown">SUMMER IS BETTER AT THE BALLPARK</h2>
                      <link href="#about" classname="btn-get-started animate__animated animate__fadeInUp scrollto" />Catch A Ball Game
                    </div>
                  </div>
                </div>
                {/* Slide 3 */}
                <div classname="carousel-item" style={{backgroundImage: 'url(assets/img/sell.jpg)'}}>
                  <div classname="carousel-container">
                    <div classname="container">
                      <h2 classname="animate__animated animate__fadeInDown">PLANS CHANGED?</h2>
                      <link href="#about" classname="btn-get-started animate__animated animate__fadeInUp scrollto" />Sell Your Tickets Now
                    </div>
                  </div>
                </div>
              </div>
              <link classname="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev" />
              <span classname="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
              <link classname="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next" />
              <span classname="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
            </div>
          </section>{/* End Events */}
          <main id="main">
            <section id="team" classname="team ">
              <div classname="container">
                <div classname="d-flex justify-content-between align-items-center">
                  <h2>Upcoming Events</h2>
                </div>
                <div classname="container">
                  <div classname="row">
                    <div classname="col-lg-6">
                      <div classname="member d-flex align-items-start">
                        <div classname="pic"><img src="assets/img/chappelle.jpg" classname="img-fluid" alt="" /></div>
                        <div classname="member-info">
                          <h4>Dave Chappelle</h4>
                          <span>Foxwoods Casino</span>
                          <p>June 24th - 26th</p>
                        </div>
                      </div>
                    </div>
                    <div classname="col-lg-6 mt-4 mt-lg-0">
                      <div classname="member d-flex align-items-start">
                        <div classname="pic"><img src="assets/img/yardgoats.png" classname="img-fluid" alt="" /></div>
                        <div classname="member-info">
                          <h4>Hartford Yard Goats</h4>
                          <span>Dunkin Donuts Park</span>
                          <p>vs. Richmond</p>
                          <p>June 24th - 26th</p>
                        </div>
                      </div>
                    </div>
                    <div classname="col-lg-6 mt-4">
                      <div classname="member d-flex align-items-start">
                        <div classname="pic"><img src="assets/img/bosnyy.jpg" classname="img-fluid" alt="" /></div>
                        <div classname="member-info">
                          <h4>Red Sox vs. Yankees</h4>
                          <span>Fenway Park</span>
                          <p>June 24th - 26th</p>              
                        </div>
                      </div>
                    </div>
                    <div classname="col-lg-6 mt-4">
                      <div classname="member d-flex align-items-start">
                        <div classname="pic"><img src="assets/img/nymphi.png" classname="img-fluid" alt="" /></div>
                        <div classname="member-info">
                          <h4>Mets vs. Phillies</h4>
                          <span>Citi Field</span>
                          <p>June 24th - 26th</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></section>{/* End Team Section */}
            {/* ======= Payments Section ======= */}
            <section id="clients" classname="clients section-bg">
              <div classname="container">
                <style dangerouslySetInnerHTML={{__html: "\n.img-container {\ntext-align: center;\ndisplay: block;\n}\n" }} />
                <span classname="img-container"> {/* Inline parent element */}
                  <img src="assets/img/clients/payments.png" alt="" />
                </span>
              </div>
            </section>{/* End Payments Section */}
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
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
                        <link href="#" classname="twitter" /><i classname="bx bxl-twitter" />
                        <link href="#" classname="facebook" /><i classname="bx bxl-facebook" />
                        <link href="#" classname="instagram" /><i classname="bx bxl-instagram" />
                        <link href="#" classname="google-plus" /><i classname="bx bxl-skype" />
                        <link href="#" classname="linkedin" /><i classname="bx bxl-linkedin" />
                      </div>
                    </div>
                  </div>
                  <div classname="col-lg-2 col-md-6 footer-links">
                    <h4>Our Company Links</h4>
                    <ul>
                      <li><i classname="bx bx-chevron-right" /> <link href="#" />About Us</li>
                      <li><i classname="bx bx-chevron-right" /> <link href="#" />Press Box</li>
                      <li><i classname="bx bx-chevron-right" /> <link href="#" />Partners</li>
                      <li><i classname="bx bx-chevron-right" /> <link href="#" />Affiliates</li>
                      <li><i classname="bx bx-chevron-right" /> <link href="#" />Privacy Policy</li>
                    </ul>
                  </div>
                  <div classname="col-lg-3 col-md-6 footer-links">
                    <h4>Questions?</h4>
                    <ul>
                      <li><i classname="bx bx-chevron-right" /> <link href="#" />Help Center</li>
                      <li><i classname="bx bx-chevron-right" /> <link href="#" />Community</li>
                      <li><i classname="bx bx-chevron-right" /> <link href="#" />Top Cities</li>
                      <li><i classname="bx bx-chevron-right" /> <link href="#" />Gift Cards</li>
                      <li><i classname="bx bx-chevron-right" /> <link href="#" />Contact Us</li>
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
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/sailor-free-bootstrap-theme/ */}
                Designed by <link href="https://bootstrapmade.com/" />Vincent Richitelli
              </div>
            </div>
          </footer>{/* End Footer */}
          <link href="#" classname="back-to-top d-flex align-items-center justify-content-center" /><i classname="bi bi-arrow-up-short" />
        </div>);<p />
      </div>
    );
  }
};


export default App;