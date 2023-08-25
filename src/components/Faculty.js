import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/cordimg.jpeg";


class Faculty extends Component {
  render() {
    return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                A word from <span className="purple"> Faculty Coordinator </span>
              </h1>
              <p   style={{ textAlign: "justify" }}>


                <br />
                As the Faculty Coordinator for the IETE Student Forum in our college, I am truly enthusiastic about the opportunities and benefits that the IETE (Institution of Electronics and Telecommunication Engineers) brings to our students. The IETE plays a pivotal role in nurturing technical skills, fostering innovation, and building a strong foundation in electronics and telecommunication engineering. The forum provides an interactive platform for students to engage in knowledge-sharing, workshops, seminars, and technical competitions.

              </p>
              <br />
              <br />
              Prof. V. K. Bhosale
              <br />
              <span className="purple"> <i>Faculty Coordinator for IETE DIEMS Student Forum</i>  </span>
            </Col>
            <Col className='myAvatar '>
              <img src={myImg} className="img-fluid main-iete-logo" alt="avatar" style={{ maxHeight: "250px", marginTop: "40px" }} />

            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Faculty;