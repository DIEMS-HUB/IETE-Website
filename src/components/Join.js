import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";


class Join extends Component {
    render() {
        return (
            <Container fluid className="home-about-section" id="about">
                <Container>
                    <Row className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            What is  <span className="purple"><b>IETE</b>  </span> Student Forum ?
                        </h1>
                        
                        <Card className="quote-card-view">
                            <Card.Body>
                               
                                    <blockquote className="blockquote mb-0">
                                        <p style={{ textAlign: "justify", fontSize: "1em", padding: "20px" }}>

                                            <br />
                                            IETE ISF is a student-driven initiative affiliated with the Institution of Electronics and Telecommunication Engineers (IETE). It aims to empower students by fostering collaborations with leading industry players, organizing industry-centric events, workshops, seminars, and networking opportunities. By bringing students and industry experts together, IETE ISF facilitates knowledge exchange, career development, and innovation in line with the latest industry trends and practices.

                                        </p>



                                    </blockquote>

                            </Card.Body>
                        </Card>

                    </Row>

                </Container>
            </Container>
        );
    }
}

export default Join;