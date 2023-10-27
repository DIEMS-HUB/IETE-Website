import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import deims from "../assets/diemslogoiete.png"
import Button from 'react-bootstrap/Button';
import director from "../assets/Director.png"
import hod from "../assets/Hod.png"
import dean from "../assets/dean.png"
import Card from "react-bootstrap/Card";


class AboutInst extends Component {
    render() {
        return (
            <Container fluid className="about-section">
                <Container>
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <h1 className="diems-heading" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            About Deogiri Institute of Engineering and Management Studies
                        </h1>

                        <Col
                            md={8}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "50px",

                            }}
                        >

                            <blockquote className="blockquote ">
                                <p style={{ textAlign: "justify", paddingTop: "50px" }}><span className="purple">Deogiri Institute of Engineering and Management Studies </span>

                                    is affiliated to the Dr. Babasaheb Ambedkar Technological University, Lonere and is developed as per the norms of the All India Council of Technical Education (A.I.C.T.E.), Government of India.The Institute is consistently among the top institutes of Dr. B.A.M. University in examination results. The student-centric teaching learning environment, state of the art infrastructure, well-equipped laboratories, library stacked with good number of books, experienced and dedicated team of faculties are the key features of the Institute.

                                    <br />
                                    <br />
                                </p>
                            </blockquote>
                            <Button className="button-core-team" target="_blank"
                                href={"https://www.dietms.org/"}
                                style={{
                                    display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "30%",
                                    marginRight: "30%"
                                }}>
                                Visit Official DIEMS page
                            </Button>                          


                        </Col>
                        <Col
                            style={{
                                paddingTop: "80px", paddingBottom: "50px", 
                            }}
                            className="myAvtar"

                        >
                            <img src={deims}
                                alt="about"
                                className="img-fluid main-iete-logo"
                                style={{ maxHeight: "300px" }}
                            />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Card className="authority-card">
                                <Card.Img variant="top" src={hod} alt="card-img" />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: "center" }}>Dr. R. M. Autee</Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        Head of E&TC Department 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="authority-card">
                                <Card.Img variant="top" src={dean} alt="card-img" />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: "center" }}>Dr. S. V. Lahane</Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        Dean Academics
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="authority-card">
                                <Card.Img variant="top" src={director} alt="card-img" />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: "center" }}>Dr. Ulhas Shiurkar</Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        Director
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Container>
        );
    }
}

export default AboutInst;