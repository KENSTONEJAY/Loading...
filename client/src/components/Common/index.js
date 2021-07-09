import React from "react";
import Moment from 'moment';
const CommonComponent = (props) => {
  return (
    <main id="main">
    <section id="team" className="team ">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Sports</h2>
        </div>
        <div className="container">
          <div className="row">
            {props.state.events.sport.map((element,index) => {
              return (
                <div className="col-lg-6" key={index +'sport'}>
                  <div className="member d-flex align-items-start">
                    <div className="pic"><img src="assets/img/sports.jpg" className="img-fluid" alt="" /></div>
                    <div className="member-info">
                      <h4>{element.event_name}</h4>
                      <span>{element.event_venue}, {element.event_city}</span>
                      <p>{Moment(element.event_date).format('d MMM yy')}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="row">
            <h3>Concert</h3>
            {props.state.events.concert.map((element,index) => {
              return (
                <div className="col-lg-6" key={index +'concert'}>
                  <div className="member d-flex align-items-start">
                    <div className="pic"><img src="assets/img/chappelle.jpg" className="img-fluid" alt="" /></div>
                    <div className="member-info">
                      <h4>{element.event_name}</h4>
                      <span>{element.event_venue}, {element.event_city}</span>
                      <p>{Moment(element.event_date).format('d MMM yy')}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="row">
            <h3>Theatre</h3>
            {props.state.events.theatre.map((element,index) => {
              return (
                <div className="col-lg-6" key={index +'theatre'}>
                  <div className="member d-flex align-items-start">
                    <div className="pic"><img src="assets/img/theatre.jpg" className="img-fluid" alt="" /></div>
                    <div className="member-info">
                      <h4>{element.event_name}</h4>
                      <span>{element.event_venue}, {element.event_city}</span>
                      <p>{Moment(element.event_date).format('d MMM yy')}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div></section>
  </main>
  )
};

export default CommonComponent;