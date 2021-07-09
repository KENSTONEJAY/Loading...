import React from "react";
import { Link } from "react-router-dom";


class Footer extends React.Component {
  render() {
    return (
      <section id="clients" className="clients section-bg">
            <div className="container">
              <h3>Ticket Scalper</h3>
                <p>
                  A108 Adam Street,
                  NY 535022, USA, 
                  <strong> Phone:</strong> +1 5589 55488 55
                  <strong> Email:</strong> info@example.com
                </p>
            </div>
          </section>
    )
  }
}

export default Footer;