// import { Link } from "react-router-dom";
import React from "react";
{/* <img src={process.env.PUBLIC_URL + '/img/logo.png'} />; */}
// import img from "../../img/giants.jpg"



class Main extends React.Component {
render (){
    return (
        <div>
          {/* <img src={img} alt="TicketScalper Logo"/> */}
          <main id="main">
            <section id="team" className="team ">
              <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                  <h2>Upcoming Events</h2>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="member d-flex align-items-start">
                        <div className="pic"><img src="assets/img/chappelle.jpg" className="img-fluid" alt="" /></div>
                        <div className="member-info">
                          <h4>Dave Chappelle</h4>
                          <span>Foxwoods Casino</span>
                          <p>June 24th - 26th</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4 mt-lg-0">
                      <div className="member d-flex align-items-start">
                        <div className="pic"><img src="assets/img/yardgoats.png" className="img-fluid" alt="" /></div>
                        <div className="member-info">
                          <h4>Hartford Yard Goats</h4>
                          <span>Dunkin Donuts Park</span>
                          <p>vs. Richmond</p>
                          <p>June 24th - 26th</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                      <div className="member d-flex align-items-start">
                        <div className="pic"><img src="assets/img/bosnyy.jpg" className="img-fluid" alt="" /></div>
                        <div className="member-info">
                          <h4>Red Sox vs. Yankees</h4>
                          <span>Fenway Park</span>
                          <p>June 24th - 26th</p>              
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                      <div className="member d-flex align-items-start">
                        <div className="pic"><img src="assets/img/nymphi.png" className="img-fluid" alt="" /></div>
                        <div className="member-info">
                          <h4>Mets vs. Phillies</h4>
                          <span>Citi Field</span>
                          <p>June 24th - 26th</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></section>       
         </main>
         </div>
    );
  }
};


export default Main;