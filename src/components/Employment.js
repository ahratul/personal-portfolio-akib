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
                          <h4>💼 Junior IT-Administrator at 🌟</h4>
                          <p>
                            <strong>REHUB FORGE GmbH (October 2024 — Ongoing), Köln 🏙️</strong>
                          </p>
                          <ul>
                            <li>🖧 Monitoring and maintaining network infrastructure (routers, switches, firewalls), ensuring 99.9% availability of critical systems. 🚀</li>
                            <li>📊 Managing databases (Oracle, SQL) with a 20% improvement in performance and a 15% reduction in database-related issues. 🎯</li>
                            <li>🔍 Conducting regular system audits, identifying and resolving 95% of potential vulnerabilities before they impact operations. 🛡️</li>
                            <li>📈 Optimized network traffic through advanced routing techniques, improving speed and reducing latency by 30%. ⚡</li>
                            <li>🔒 Implemented and managed robust security policies, reducing unauthorized access incidents by 40%. 🔑</li>
                            <li>🛠️ Automated routine tasks using Python scripts, cutting down manual efforts by 25%. 🤖</li>
                            <li>📞 Provided advanced IT support, achieving 90% positive user feedback for quick issue resolution. 💬</li>
                            <li>🌐 Deployed and maintained VPN solutions, enabling secure remote access for over 50 users. 🌍</li>
                            <li>📘 Documented technical procedures and network configurations, ensuring easy knowledge transfer and troubleshooting. 📝</li>
                          </ul>
                        </div>

                      </Tab.Pane>

                      <Tab.Pane eventKey="workingStudentIT">
                        <div className="employment-item">
                          <h4>🎓 Working Student IT Administrator 🌟</h4>
                          <p>
                            <strong>REHUB digitale Planer (December 2023 — September 2024), Köln 🏙️</strong>
                          </p>
                          <ul>
                            <li>🚀 Implemented monitoring strategies, reducing downtime by 50% and boosting performance by 30%. 📈</li>
                            <li>✨ Optimized system administration tasks, automating 20% of processes and improving efficiency by 15%. 🔄</li>
                            <li>🌐 LAN and Network Documentation:</li>
                            <ul>
                              <li>📍 Documented and mapped 100% of LAN connections and network devices. 🖧</li>
                              <li>📜 Created a comprehensive network topology for seamless troubleshooting. 🗺️</li>
                            </ul>
                            <li>🌍 Remote Workplace Management:</li>
                            <ul>
                              <li>💻 Deployed remote desktop tools, enhancing remote workflows for 100% of employees. 🏡</li>
                              <li>👤 Managed 100% of user accounts and administrative setups on office laptops. 🔐</li>
                            </ul>
                            <li>🔒 VPN and Network Resources:</li>
                            <ul>
                              <li>🌟 Configured secure VPN access, achieving 100% connectivity for remote users. 🔑</li>
                              <li>📂 Integrated network drives with NAS and server infrastructure for 100% of team members. 💾</li>
                            </ul>
                            <li>💼 IT Support, Device Management, and Documentation:</li>
                            <ul>
                              <li>🛠️ Resolved 95% of hardware/software issues independently. 🔧</li>
                              <li>📱 Monitored and managed 100% of company mobile devices. 📊</li>
                              <li>🌐 Ensured 99.9% network uptime via continuous monitoring. ✅</li>
                              <li>👥 Led onboarding/offboarding with MS365, covering 100% of users. 📋</li>
                              <li>📘 Provided advanced support using Jira and Confluence, closing tickets 20% faster. 📝</li>
                            </ul>
                            <li>📋 Administrative Tasks:</li>
                            <ul>
                              <li>🎨 Administered Adobe Creative Cloud for 100% of the design team. 🖌️</li>
                            </ul>
                          </ul>
                          <div className="publication-item">
                            <h4>📄 Reference Letter 🌟</h4>
                            <a
                              href="https://drive.google.com/file/d/1YvtThTc94hK89be7DN6-XUtMtw7nmPCu/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Paper 📑
                            </a>
                          </div>
                        </div>
                      </Tab.Pane>




                      <Tab.Pane eventKey="thesisStudent">
                        <div className="employment-item">
                          <h4>📜 Master’s Thesis Student 🌟</h4>
                          <p>
                            <strong>Fraunhofer Institute for Production Technology IPT (April 2023 — October 2023), Aachen 🏙️</strong>
                          </p>
                          <ul>
                            <li>⚙️ Developed a novel cyber-attack detection system using LSTM neural networks, achieving 92% classification accuracy for anomalies in 3-AXIS CNC machines. 📈</li>
                            <li>🔍 Expertise in machine learning, focusing on time-series data, anomaly detection, and side-channel sensor analysis. 🚀</li>
                            <li>🔐 Enhanced industrial cybersecurity by integrating advanced ML techniques into manufacturing workflows. 🏭</li>
                            <li>🤝 Collaborated with interdisciplinary teams and presented actionable insights to stakeholders. 🌟</li>
                            <li>📊 Demonstrated strong analytical skills, systematic problem-solving, and iterative model refinement. ✅</li>
                          </ul>
                          <div className="publication-item">
                            <h4>📄 Reference Letter 🌟</h4>
                            <a
                              href="https://drive.google.com/file/d/1OI0wR2C55b2QAymEXDw1kvWftX-4lRdA/view"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Paper 📑
                            </a>
                          </div>
                        </div>
                      </Tab.Pane>







                      <Tab.Pane eventKey="softwareDev">
                        <div className="employment-item">
                          <h4>👨‍💻 Working Student Software Developer 🌟</h4>
                          <p>
                            <strong>Resolve Biosciences GMBH (November 2022 — February 2023), Monheim 🏙️</strong>
                          </p>
                          <ul>
                            <li>💻 Role: Contributed to Reagent Development and Workflow Optimization. 🛠️</li>
                            <li>🔍 Enhanced Spot Calling scripts, improving efficiency by 35%. 📈</li>
                            <li>⚡ Quickly adapted to complex molecular imaging tasks. 🚀</li>
                            <li>📈 Defined Directed Acyclic Graphs (DAGs) using Apache Airflow for process automation. 🔄</li>
                            <li>🌟 Delivered high-quality, innovative solutions with 95% satisfaction rate. ✅</li>
                          </ul>
                          <p>🏆 Praised for outstanding contributions and problem-solving skills. 🎉</p>
                          <div className="publication-item">
                            <h4>📄 Reference Letter 🌟</h4>
                            <a href="https://drive.google.com/file/d/1F8FeQgT13Oi5JwAXB8dEiASJLD5xBjk6/view" target="_blank" rel="noopener noreferrer">
                              View Letter 📑
                            </a>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="backendDev">
                        <div className="employment-item">
                          <h4>💻 Working Student Backend Developer at 🌟</h4>
                          <p>
                            <strong>xarvio® Digital Farming Solutions (January 2022 — August 2022), Köln 🏙️</strong>
                          </p>
                          <ul>
                            <li>🛠️ Collaborated with the development team to implement data strategies, build data flows, and develop data models. 🚀</li>
                            <li>🔧 Managed ongoing maintenance and resolved 95% of bugs in Python-Django projects, improving system stability by 40%. 📈</li>
                            <li>🐍 Developed server applications and client interfaces using Python and Django, achieving a 30% reduction in response time. ⚡</li>
                            <li>📣 Translated 100% of end-user feedback into improved, meaningful solutions, enhancing user satisfaction by 25%. 🎯</li>
                            <li>📊 Integrated third-party APIs to automate data synchronization processes, reducing manual intervention by 50%. 🔄</li>
                            <li>🔐 Implemented robust authentication systems, improving application security by 40%. 🔒</li>
                            <li>⚡ Streamlined database queries, optimizing performance and reducing load times by 20%. 🚦</li>
                          </ul>
                          <div className="publication-item">
                            <h4>📄 Reference Letter 🌟</h4>
                            <a href="https://drive.google.com/file/d/1GeWT2y0mgHR9uiZOwXa3yQrQdOC_WbYX/view" target="_blank" rel="noopener noreferrer">
                              View Paper 📑
                            </a>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="dataAnalyst">
                        <div className="employment-item">
                          <h4>📊 Internship in Data Analyst at 🌟</h4>
                          <p>
                            <strong>xarvio® Digital Farming Solutions (October 2021 — December 2021), Köln 🏙️</strong>
                          </p>
                          <ul>
                            <li>🧹 Cleaned and preprocessed 100% of unstructured data, ensuring readiness for analysis and tasks involving confidential pipelines. 🛡️</li>
                            <li>📈 Analyzed 22+ years of agricultural data to create a Dose Response model, leveraging NLP ML libraries to train a Robust Regression model for nonlinear data analysis. 📊</li>
                            <li>🌾 Developed a herbicide dose-effect model, achieving 85% accuracy in predicting effective doses. 🌟</li>
                            <li>🚀 Automated data cleaning processes, reducing preprocessing time by 30%. 🕒</li>
                            <li>📚 Documented findings and methodologies, enabling reproducibility and knowledge sharing among team members. 📝</li>
                          </ul>
                          <div className="publication-item">
                            <h4>📄 Reference Letter 🌟</h4>
                            <a href="https://drive.google.com/file/d/1GeWT2y0mgHR9uiZOwXa3yQrQdOC_WbYX/view" target="_blank" rel="noopener noreferrer">
                              View Paper 📑
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



                      