import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../src/assets/websitelogo.png";
import Type from "./Type";
import Particle from "./Particles";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      <Particle />
        <Container className="home-content">
          <Row>
       
            <Col >
              <img
                src={homeLogo}
                alt="home pic"
                style={{ maxHeight: "450px" }}
                className="main-iete-logo"
              />
            </Col>
            <Col md={7} className="home-header" >
              
              <h1 className="heading-name">
                Welcome to 
                 < span className="main-name"> Institution of Electronics and Telecommunication Engineers  DIEMS Student Forum</span>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2/>
    </section>
  );
}

export default Home;
