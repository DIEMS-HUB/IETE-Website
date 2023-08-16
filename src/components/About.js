import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from './Aboutcard';
import quoteasset from "../assets/quoteasset.png"

class About extends Component {
    render() {
        return (
            <Container fluid className="about-section">
                <Container>
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                            md={5}
                            style={{ paddingTop: "120px", paddingBottom: "50px" }}
                            className="about-img"
                        >
                            <img src={quoteasset} alt="about" className="img-fluid" />
                        </Col>
                        <Col
                            md={7}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "50px",
                            }}
                        >
                            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                                About us
                            </h1>
                            <Aboutcard />
                        </Col>
                        
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default About;