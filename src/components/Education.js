import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>Education</h2>
                  <Tab.Container id="education-tabs" defaultActiveKey="masters">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="education-tabs-nav"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="masters">Master’s Degree</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="bachelors">
                          Bachelor’s Degree
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="masters">
                        <div className="education-item">
                          <h4>Masters in Communication System and Networking, GPA: 2.55</h4>
                          <p>
                            <strong>
                              Technische Hochschule Köln (2020 - Present)
                            </strong>
                          </p>
                          <ul>
                            <li>Next Generation of Networking, Cybersecurity</li>
                            <li>Large Cloud-Based Software Development</li>
                          </ul>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="bachelors">
                        <div className="education-item">
                          <h4>
                            Bachelor of Science in Electronic and Electrical Engineering, GPA: 2.1.
                            
                          </h4>
                          <p>
                            <strong>
                              American International University-Bangladesh, Dhaka,Bangladesh (2015 - 2020)
                            </strong>
                          </p>
                          <ul>
                            <li>
                              Digital Design with System Verilog, VHDL, and FPGAs
                            </li>
                            <li>Microwave Engineering</li>
                          </ul>
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
