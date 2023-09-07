import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../src/assets/websitelogo.png";
import Type from "./Type";
import Particle from "./Particles";
import Home2 from "./Home2";
import AboutInst from "./AboutInst";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      <Particle />
        <Container className="home-content">
          <Row>
       
            <Col className="main-logo-col">
              <img
                src={homeLogo}
                alt="home pic"
                style={{ maxHeight: "450px" }}
                className="main-iete-logo img-fluid"
              />
            </Col>
            <Col md={7} className="home-header" >
              
              <h2 className="heading-name">
                Welcome to 
                 < span className="main-name"> Deogiri Institute of Engineering and Management Studies </span>
                 <div className="iete-name">IETE Student Forum</div>
              </h2>
              <div>

              </div>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutInst/>
      <Home2/>
    </section>
  );
}

export default Home;
