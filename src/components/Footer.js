import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/thk.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/brands-github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="logo-col">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/akibhasanratul/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://github.com/ahratul" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Github Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <p>Copyright 2024. All Rights Reserved</p>
      </div>
    </footer>
  )
}
