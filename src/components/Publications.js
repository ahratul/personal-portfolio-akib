import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Publications = () => {
  const PUBLICATIONS = {
    "📖 Dose-Response Curve Fitting for Individual Herbicide and Individual Weed Combination with Gompertz Function":
      "https://www.researchgate.net/publication/369884960_Dose-Response_Curve_Fitting_for_Individual_Herbicide_and_Individual_Weed_Combination_with_Gompertz_Function/stats",
    "📖 Unmanned Aerial Vehicle for Cleaning the High Rise Buildings":
      "https://ieeexplore.ieee.org/document/8644476/references#references",
  };

  return (
    <section className="publications" id="publications">
      <Container> 
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>Publications</h2>
                  <Tab.Container id="publications-tabs" defaultActiveKey="papers">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="publications-tabs-nav"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="papers">Research Papers</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="papers">
                        <div className="publications-list">
                          {Object.entries(PUBLICATIONS).map(([title, link]) => (
                            <div className="publication-item" key={title}>
                              <h4>{title}</h4>
                              <a href={link} target="_blank" rel="noopener noreferrer">
                                View Paper
                              </a>
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
