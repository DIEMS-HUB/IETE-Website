import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/myImg.png";
// import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import About from "./About";
import Faculty from "./Faculty";
import wrldmap from "../assets/undraw_connected_world_wuay.svg"

function Home2() {
  return (
    <section>
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              What is  <span className="purple"><b>IETE</b>  </span> Student Forum ?
            </h1>
            <img
                    src={wrldmap}
                    alt="world map"
                    style={{
                        maxHeight: "200px", marginTop: "70px", marginBottom: "50px", display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                />
            <p className="home-about-body" style={{ textAlign: "justify"}}>

              <br />
              IETE ISF is a student-driven initiative affiliated with the Institution of Electronics and Telecommunication Engineers (IETE). It aims to empower students by fostering collaborations with leading industry players, organizing industry-centric events, workshops, seminars, and networking opportunities. By bringing students and industry experts together, IETE ISF facilitates knowledge exchange, career development, and innovation in line with the latest industry trends and practices.

            </p>
        </Row>
        <About />
        <Faculty/>
      </Container>
    </Container>
    </section>
  );
}
export default Home2;
