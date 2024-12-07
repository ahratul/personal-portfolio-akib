import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const References = () => {
  return (
    <section className="references" id="references">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>References</h2>
                  <div className="reference-item">
                    <h4>Dr. Holger Hoffmann</h4>
                    <p>
                      <strong>Manager Teams Weed Management & Crop Modelling at xarvio® Digital Farming Solutions</strong>
                    </p>
                    <ul>
                      <li>E-mail: <a href="mailto:holger.hoffmann@xarvio.com">holger.hoffmann@xarvio.com</a></li>
                      <li>Mobile Number: <a href="tel:+491741954556">+49 174 1954556</a></li>
                    </ul>
                  </div>

                  <div className="reference-item">
                    <h4>Lars Leyendecker</h4>
                    <p>
                      <strong>Research Associate and Doctoral Student at Fraunhofer IPT and RWTH Aachen</strong>
                    </p>
                    <ul>
                      <li>E-mail: <a href="mailto:lars.leyendecker@ipt.fraunhofer.de">lars.leyendecker@ipt.fraunhofer.de</a></li>
                      <li>Mobile Number: <a href="tel:+492418904314">+49 241 8904-314</a></li>
                    </ul>
                  </div>

                  <div className="reference-item">
                    <h4>Christopher Yelegen</h4>
                    <p>
                      <strong>Head of Development at REHUB FORGE</strong>
                    </p>
                    <ul>
                      <li>E-mail: <a href="mailto:cy@rehub.team">cy@rehub.team</a></li>
                      <li>Mobile Number: <a href="tel:+4917619266001">+49 176 19266001</a></li>
                    </ul>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
