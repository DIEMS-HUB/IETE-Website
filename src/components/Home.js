import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../src/assets/websitelogo.png";
import Type from "./Type";
import Particle from "./Particles";


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
              />
            </Col>
            <Col md={7} className="home-header">
              
              <h1 className="heading-name">
                Welcome to 
                <strong className="main-name"> Institute of Electronics and Telecommunication Engineering DIEMS  ISF</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
