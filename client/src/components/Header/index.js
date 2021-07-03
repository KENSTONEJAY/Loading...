import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ opacity: 93 }}>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><Link to="index.html">Ticket Scalper</Link></h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    <Link to="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></img></Link>
                    {/* {/* <nav id="navbar" className="navbar"> */}
                    <ul>
                        <li><Link to="index.html" className="active">Home</Link></li>

                        <li className="dropdown"><Link to="#"><span>Location</span> <i className="bi bi-chevron-down"></i></Link>
                            <ul>
                                <li><Link to="team.html">United States</Link></li>
                            </ul>
                        </li>
                        <li><Link to="services.html">Sports</Link></li>
                        <li><Link to="portfolio.html">Concerts</Link></li>
                        <li><Link to="pricing.html">Theater & Comedy</Link></li>
                        <li><Link to="blog.html">Top Events</Link></li>
                        <li><Link to="contact.html">Sell Tickets</Link></li>

                        <li className="dropdown"><Link to="#"><span>My Account</span> <i className="bi bi-chevron-down"></i></Link>
                            <ul>
                                <li><Link to="portfolio-details.html">Dashboard</Link></li>
                                <li><Link to="testimonials.html">Log In</Link></li>
                            </ul>
                            </li>
                     </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
 
            </div>
            </header >
            </nav>
  )
 }
};

export default Header;