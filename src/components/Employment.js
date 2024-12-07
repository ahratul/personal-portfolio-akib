import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Employment = () => {
  return (
    <section className="employment" id="employment">
      <Container>
        <Row>  
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>Employment History</h2>
                  <Tab.Container id="employment-tabs" defaultActiveKey="masters">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="employment-tabs-nav"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="masters">Junior IT-Administrator</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="workingStudentIT">Working Student IT Administrator</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="thesisStudent">Master’s Thesis Student</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="softwareDev">Working Student Software Developer</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="backendDev">Working Student Backend Developer</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="dataAnalyst">Internship in Data Analyst</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="masters">
                        <div className="employment-item">
                          <h4>Junior IT-Administrator at</h4>
                          <p>
                            <strong>REHUB FORGE GmbH (October 2024 — Ongoing), Köln</strong>
                          </p>
                          <ul>
                            <li>Monitoring and maintaining network infrastructure such as routers, switches, and firewalls, resulting in 99.9% availability of critical systems.</li>
                            <li>Managing and maintaining databases such as Oracle and SQL, resulting in 20% improvement in database performance and 15% reduction in database-related issues.</li>
                          </ul>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="workingStudentIT">
                        <div className="employment-item">
                          <h4>Working Student IT Administrator at</h4>
                          <p>
                            <strong>REHUB digitale Planer (December 2023 — September 2024), Köln</strong>
                          </p>
                          <ul>
                            <li>Implemented a system monitoring and troubleshooting strategy, reducing system downtime by 50% and increasing system performance by 30%.</li>
                            <li>Developed and recommended innovative approaches to system administration tasks, reducing manual tasks by 20% and increasing system performance by 15%.</li>
                          </ul>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="thesisStudent">
                        <div className="employment-item">
                          <h4>Master’s Thesis Student at</h4>
                          <p>
                            <strong>Fraunhofer Institute for Production Technology IPT (April 2023 — October 2023), Aachen</strong>
                          </p>
                          <ul>
                            <li>Developed and successfully implemented a novel cyber-attack detection system using LSTM neural networks and side sensor data from CNC machines.</li>
                            <li>Demonstrated a deep understanding of cybersecurity principles and the ability to apply cutting-edge machine-learning techniques to enhance the security of critical industrial systems.</li>
                          </ul>
                          <div className="publication-item">
                            <h4>Reference Letter</h4>
                            <a href="https://drive.google.com/file/d/1OI0wR2C55b2QAymEXDw1kvWftX-4lRdA/view" target="_blank" rel="noopener noreferrer">
                              View Paper
                            </a>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="softwareDev">
                        <div className="employment-item">
                          <h4>Working Student Software Developer at</h4>
                          <p>
                            <strong>Resolve Biosciences GMBH (November 2022 — February 2023), Monheim</strong>
                          </p>
                          <ul>
                            <li>Defined Directed Acyclic Graphs (DAGs) in Apache Airflow, where nodes represent tasks and edges represent dependencies between tasks.</li>
                            <li>Tasks are instances of operators within a DAG, representing the individual units of work.</li>
                          </ul>
                          <div className="publication-item">
                            <h4>Reference Letter</h4>
                            <a href="https://drive.google.com/file/d/1F8FeQgT13Oi5JwAXB8dEiASJLD5xBjk6/view" target="_blank" rel="noopener noreferrer">
                              View Paper
                            </a>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="backendDev">
                        <div className="employment-item">
                          <h4>Working Student Backend Developer at</h4>
                          <p>
                            <strong>xarvio® Digital Farming Solutions (January 2022 — August 2022), Köln</strong>
                          </p>
                          <ul>
                            <li>Expertise in Django, Python, and Python application frameworks like Django REST, Flask, and FastAPI.</li>
                            <li>Worked with serverless Amazon Web Services (AWS) technologies such as Lambda.</li>
                          </ul>
                          <div className="publication-item">
                            <h4>Reference Letter</h4>
                            <a href="https://drive.google.com/file/d/1GeWT2y0mgHR9uiZOwXa3yQrQdOC_WbYX/view" target="_blank" rel="noopener noreferrer">
                              View Paper
                            </a>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="dataAnalyst">
                        <div className="employment-item">
                          <h4>Internship in Data Analyst at</h4>
                          <p>
                            <strong>xarvio® Digital Farming Solutions (October 2021 — December 2021), Köln</strong>
                          </p>
                          <ul>
                            <li>Cleaned unstructured data for analysis and tasks involving confidential pipelines.</li>
                            <li>Analyzed over 22 years of data to create a Dose Response model using NLP ML libraries to train a Robust Regression model for nonlinear data analysis.</li>
                          </ul>
                          <div className="publication-item">
                            <h4>Reference Letter</h4>
                            <a href="https://drive.google.com/file/d/1GeWT2y0mgHR9uiZOwXa3yQrQdOC_WbYX/view" target="_blank" rel="noopener noreferrer">
                              View Paper
                            </a>
                          </div>
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
