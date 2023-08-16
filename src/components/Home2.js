import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/myImg.png";
// import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import About from "./About";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col  className="home-about-description" >
            <h1 style={{ fontSize: "2.6em" }}>
              What is  <span className="purple"><b>IETE</b>  </span> ISF ?
            </h1>
            <p className="home-about-body" >
              
              <br />
              IETE ISF is a student-driven initiative affiliated with the Institution of Electronics and Telecommunication Engineers (IETE). It aims to empower students by fostering collaborations with leading industry players, organizing industry-centric events, workshops, seminars, and networking opportunities. By bringing students and industry experts together, IETE ISF facilitates knowledge exchange, career development, and innovation in line with the latest industry trends and practices.
              
            </p>
          </Col>
          
        </Row>
        <About/>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Social Links</h1>
            <p>
              Feel free to connect with us
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iete_diems/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
