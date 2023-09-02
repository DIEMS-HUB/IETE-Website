import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import JoinLogo from "../../src/assets/undraw_join_re_w1lh.svg";
import Button from "react-bootstrap/Button";

class Join extends Component {
  render() {
    return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Join our{" "}
              <span className="purple">
                <b>IETE</b>{" "}
              </span>{" "}
              Community
            </h1>

            <div className="iete-join">
              <img
                src={JoinLogo}
                alt="Join pic"
                style={{ maxHeight: "190px" }}
                className="iete-join-logo"
              />
            </div>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p
                    style={{
                      textAlign: "justify",
                      fontSize: "1em",
                      marginBottom: "20px"
                    }}
                  >
                    <br />
                    Unlock a world of opportunities by joining the Institute of Electronics & Telecommunication Engineering Student Forum (IETE ISF). Explore technology's horizons, collaborate on groundbreaking projects, and stay at the forefront of electronics and telecommunications. Click on the button below and embark on a journey of endless possibilities!
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
            <br />
            <Button
              className="button-join"
              target="_blank"
              href={""}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "200px",
                marginLeft: "43%",
                marginRight: "43%",
                marginTop: "15px"
              }}
            >
              Join us
            </Button>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Join;
