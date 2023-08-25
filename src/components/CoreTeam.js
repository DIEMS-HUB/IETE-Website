import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Projectcards";
import adityasimant from "../assets/coreteam/adityasimant.jpeg"
import renukam from "../assets/coreteam/renum.jpeg"
import pratikg from "../assets/coreteam/pratikg.jpeg"


class CoreTeam extends Component {
    render() {
        return (
            
            <Container fluid className="project-section">
                <Container>
                    <h1 className="project-heading" style={{textAlign:"center"}}>
                        IETE DIEMS ISF Core Committe 
                    </h1>
                    <p style={{ color: "white", textAlign:"center" }}>
                        Meet our IETE DIEMS members
                    </p>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={pratikg}
                                isBlog={false}
                                title="Pratik Gawande"
                                description="Chairperson"
                                ghLink="https://www.linkedin.com/in/pratik-gawande"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={adityasimant}
                                isBlog={false}
                                title="Aditya Simant"
                                description="Technical Head"
                                ghLink="https://linkedin.com/in/aditya-simant"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={renukam}
                                isBlog={false}
                                title="Renuka Muddhalwadkar"
                                description="Event Head"
                                ghLink="https://www.linkedin.com/in/renuka-mudhalwadkar-698966253"
                            />
                        </Col>
                        


                    </Row>
                </Container>
            </Container>
        );
    }
}

export default CoreTeam;