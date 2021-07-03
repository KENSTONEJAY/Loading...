import { Link } from "react-router-dom";
import React from "react";
{/* <img src={process.env.PUBLIC_URL + '/img/logo.png'} />; */}
// import img from "../../img/giants.jpg"




class Hero extends React.Component {
render (){
    return (
        <div>
          {/* <img src={img} alt="TicketScalper Logo"/> */}
          <section id="hero">
            <div id="heroCarousel" data-bs-interval={5000} className="carousel slide carousel-fade" data-bs-ride="carousel">
              <ol className="carousel-indicators" id="hero-carousel-indicators" />
              <div className="carousel-inner" role="listbox">
                {/* Slide 1 */}
                <div className="carousel-item active" style={{backgroundImage: 'url(assets/img/summerslam.jpg)'}}>
                  <div className="carousel-container">
                    <div className="container">
                      <h2 className="animate__animated animate__fadeInDown"><span>HOTTEST SUMMER EVENTS</span></h2>
                      <Link to="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto" />Experience It Live
                    </div>
                  </div>
                </div>
                {/* Slide 2 */}
                <div className="carousel-item" style={{backgroundImage: 'url(assets/img/yankees.jpg)'}}>
                  <div className="carousel-container">
                    <div className="container">
                      <h2 className="animate__animated animate__fadeInDown">SUMMER IS BETTER AT THE BALLPARK</h2>
                      <Link to="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto" />Catch A Ball Game
                    </div>
                  </div>
                </div>
                {/* Slide 3 */}
                <div className="carousel-item" style={{backgroundImage: 'url(assets/img/sell.jpg)'}}>
                  <div className="carousel-container">
                    <div className="container">
                      <h2 className="animate__animated animate__fadeInDown">PLANS CHANGED?</h2>
                      <Link to="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto" />Sell Your Tickets Now
                    </div>
                  </div>
                </div>
              </div>
              <Link className="carousel-control-prev" to="#heroCarousel" role="button" data-bs-slide="prev" />
              <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
              <Link className="carousel-control-next" to="#heroCarousel" role="button" data-bs-slide="next" />
              <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
            </div>
          </section>
         </div> 
    );
  }
};


export default Hero;