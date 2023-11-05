import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Projectcards";
import adityasimant from "../assets/coreteam/adityasimant.jpeg"
import renukam from "../assets/coreteam/renum.jpeg"
import pratikg from "../assets/coreteam/pratikg.jpeg"
import mitaliW from "../assets/coreteam/mitaliW.jpeg"
import SSurya from "../assets/coreteam/creativeII.jpeg"
import jivan from "../assets/coreteam/jivank.jpeg"
import cochair from "../assets/coreteam/cochair.jpeg"
import dikshit from "../assets/coreteam/dikshit.jpeg"
import RajasK from "../assets/coreteam/RajasK.jpeg"
import ChinmayaN from "../assets/coreteam/ChinmayaN.jpg"
import Techicalteam from './Techicalteam';
import ManagementTeam from './ManagementTeam';
import SandCTeam from './SandCTeam';



class CoreTeam extends Component {
    render() {
        return (

            <Container fluid className="project-section">
                <Container>
                    <h1 className="project-heading" style={{ textAlign: "center" }}>
                        IETE DIEMS ISF Core Committe
                    </h1>
                    <p style={{ color: "white", textAlign: "center" }}>
                        Meet our IETE DIEMS members
                    </p>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={3} className="project-card">
                            <ProjectCard
                                imgPath={pratikg}
                                isBlog={false}
                                title="Pratik Gawande"
                                description="Chairperson"
                                ghLink="https://www.linkedin.com/in/pratik-gawande"
                            />
                        </Col>
                        <Col md={3} className="project-card">
                            <ProjectCard
                                imgPath={cochair}
                                isBlog={false}
                                title="Ashwini Ghuge"
                                description="Co-Chairperson"
                                ghLink="https://www.linkedin.com/in/ashvini-ghuge-b3778027b"
                            />
                        </Col>
                        <Col md={3} className="project-card">
                            <ProjectCard
                                imgPath={adityasimant}
                                isBlog={false}
                                title="Aditya Simant"
                                description="Technical Head"
                                ghLink="https://linkedin.com/in/aditya-simant"
                            />
                        </Col>

                        <Col md={3} className="project-card">
                            <ProjectCard
                                imgPath={RajasK}
                                isBlog={false}
                                title="Rajas Kapre"
                                description="Technical Head"
                                ghLink="https://www.linkedin.com/in/rajas-kapre"
                            />
                        </Col>
                        <Col md={3} className="project-card">
                            <ProjectCard
                                imgPath={renukam}
                                isBlog={false}
                                title="Renuka Muddhalwadkar"
                                description="Event Management Head"
                                ghLink="https://www.linkedin.com/in/renuka-mudhalwadkar-698966253"
                            />
                        </Col>
                        <Col md={3} className="project-card">
                            <ProjectCard
                                imgPath={dikshit}
                                isBlog={false}
                                title="Sarthak Bhole"
                                description="Event Management Head"
                                ghLink="https://www.linkedin.com/in/sarthak-bhole/"
                            />
                        </Col>
                        <Col md={3} className="project-card">
                            <ProjectCard
                                imgPath={SSurya}
                                isBlog={false}
                                title="Sharda Suryavanshi"
                                description="Creative Head"
                                ghLink="https://www.linkedin.com/in/sharda-suryawanshi-728584240"
                            />
                        </Col>
                        <Col md={3} className="project-card">
                            <ProjectCard
                                imgPath={mitaliW}
                                isBlog={false}
                                title="Mitali Wagh"
                                description="Creative Head"
                                ghLink="https://www.linkedin.com/in/mitali-wagh-545a11207/"
                            />
                        </Col>
                        <Col md={3} className="project-card">
                            <ProjectCard
                                imgPath={jivan}
                                isBlog={false}
                                title="Jivan Kharat"
                                description="Social Media Head"
                                ghLink="https://www.linkedin.com/in/jivan-kharat/"
                            />
                        </Col>
                        <Col md={3} className="project-card">
                            <ProjectCard
                                imgPath={ChinmayaN}
                                isBlog={false}
                                title="Chinmaya Nayak"
                                description="Social Media Head"
                                ghLink="https://www.linkedin.com/in/chinmaya-nayak-9916aa256"
                            />
                        </Col>



                    </Row>
                    <Row>
                    <h1 className="project-heading" style={{ textAlign: "center", margin:"2rem" }}>
                        Meet our Team
                    </h1>
                    </Row>
                    <Row  style={{opacity:"85%"}}>
                        <Col>
                            <Techicalteam />
                        </Col>
                        <Col>
                        <ManagementTeam/>
                        </Col>
                        <Col>
                        <SandCTeam/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default CoreTeam;