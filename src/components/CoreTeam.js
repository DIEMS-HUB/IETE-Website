import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Projectcards";
import adityasimant from "../assets/coreteam/adityasimant.jpeg"
import renukam from "../assets/coreteam/renum.jpeg"
import chimni from "../assets/coreteam/chimni.jpg"
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
                                title="Ambassador of Mass Bunk org. "
                                description="Was once caught selling fake chits before End Semester exam"
                                ghLink="https://www.linkedin.com/in/pratik-gawande"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={adityasimant}
                                isBlog={false}
                                title="Facist humor engineer"
                                description="Professional offensive meme maker"
                                ghLink="https://linkedin.com/in/aditya-simant"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={renukam}
                                isBlog={false}
                                title="Eablo Pascobar"
                                description="Wanted in 3.5 countries for selling low quality toilet papers"
                                ghLink="https://www.linkedin.com/in/renuka-mudhalwadkar-698966253"
                            />
                        </Col>
                        
                        <Col md={4} className="project-card">
                            <ProjectCard
                                imgPath={chimni}
                                isBlog={false}
                                title="Director of defaulter hatao committe"
                                description="Has negative attendence with a doctorate in signals n systems"
                                ghLink="https://in.linkedin.com/in/chinmayi-kulkarni-940a8b223"
                            />
                        </Col>


                    </Row>
                </Container>
            </Container>
        );
    }
}

export default CoreTeam;