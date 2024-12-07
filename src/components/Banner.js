import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "IT Systems and Cloud Infrastructure Specialist", "DevOps Engineer", "Machine Learning Engineer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Akib Hasan`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "IT Systems and Cloud Infrastructure Specialist", "DevOps Engineer", "Machine Learning Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    Hi there! 👋 I am an experienced IT professional with over 5 years of diverse expertise in IT support, administration, network engineering, DevOps, and backend development. 🚀
                    I am currently wrapping up my Master’s in Communication Systems and Networking at Technische Hochschule Köln (just one course to go! 🎓). 
                    I am fluent in English 🌍 and have intermediate proficiency in German 🇩🇪.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <button 
                      onClick={() => window.open('https://www.linkedin.com/in/akibhasanratul/', '_blank', 'noopener noreferrer')}
                    >
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                    <button 
                      onClick={() => window.open('https://drive.google.com/file/d/17lX1G01VuHfvBZWdt6ACIb_r6ip2U1n-/view?usp=sharing', '_blank', 'noopener noreferrer')}
                    >
                      View Resume <ArrowRightCircle size={25} />
                    </button>
                  </div>

                  <div className="contact-info" style={{ marginTop: '20px', lineHeight: '1.6' }}>
                    <p><strong>📍 Address:</strong> Troisdorf, NRW, Germany</p>
                    <p><strong>📞 Phone:</strong> +49 1766 4369076</p>
                    <p><strong>📧 Email:</strong> <a href="mailto:ahratul740@gmail.com">ahratul740@gmail.com</a></p>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
