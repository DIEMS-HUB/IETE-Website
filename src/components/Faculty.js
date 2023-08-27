import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/cordimg.jpeg";
import Card from "react-bootstrap/Card";


class Faculty extends Component {
  render() {
    return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}>

              <Card className="quote-card-view">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                      A Word from Faculty <spam className="purple">Co-ordinator</spam>
                    </h1>
                    <p style={{ textAlign: "justify" }}>
                      <br />
                      As the Faculty Coordinator for the IETE Student Forum in our college, I am truly enthusiastic about the opportunities and benefits that the IETE (Institution of Electronics and Telecommunication Engineers) brings to our students. The IETE plays a pivotal role in nurturing technical skills, fostering innovation, and building a strong foundation in electronics and telecommunication engineering. The forum provides an interactive platform for students to engage in knowledge-sharing, workshops, seminars, and technical competitions.
                    </p>



                    <br />
                    <br />
                    Prof. V. K. Bhosale
                    <br />
                    <span className="purple"> <i>Faculty Coordinator for IETE DIEMS Student Forum</i>  </span>
                  </blockquote>
                </Card.Body>
              </Card>

            </Col>
            <Col className='myAvatar'>
              <img src={myImg} className="img-fluid main-iete-logo" alt="avatar" style={{ maxHeight: "250px", marginTop: "40px", justifyContent: "center" }} />

            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Faculty;