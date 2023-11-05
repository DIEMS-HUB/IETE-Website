import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import underconst from "../assets/undraw_under_construction_-46-pa.svg"
import Card from 'react-bootstrap/Card';
//import inaugration from '../assets/Inaugration.png'
import inauguration from '../assets/inaugration2.png'
import blogstar from '../assets/blogstar.png'
import Badge from 'react-bootstrap/Badge';
import workshop from '../assets/workshop.jfif'
import { Button } from "react-bootstrap";
import speaker from '../assets/undraw_conference_speaker_re_1rna.svg'



class Events extends Component {
    render() {
        return (
            <Container fluid className="event-section" >
                <h1 className="project-heading" style={{ textAlign: "center" }}>
                    Stay tuned for upcoming <span className='purple'>events</span> !
                </h1>

                

                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2> IETE BlogStar Challenge </h2><Badge bg="success" >Live</Badge>


                                </Card.Title>
                                <Card.Text>
                                    🚀 Introducing the IETE BlogStar Challenge: Calling all tech enthusiasts, innovators, and wordsmiths! Are you passionate about technology and have a knack for storytelling? Here's your chance to shine. Write a blog on anything tech-related, from AI breakthroughs to the latest gadgets, and compete for the title of Monthly Winner. Join us in celebrating the fusion of technology and creativity, and let your innovation and writing skills shine in the IETE BlogStar Challenge! The Monthly Winner will have their blog prominently featured on our official website, and all winners will receive certificates as a token of our appreciation for their contributions.

                                </Card.Text>
                                <Button className="button-core-team" target='_blank' href="https://docs.google.com/forms/d/14FuYAicZGNdDgAHmJ_zCGkRd7Ga2qxPrp_WyC81uaZY/edit?pli=1"
                                style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"fit-content" }}>
                                Submit your Blog
                            </Button>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col>
                        <img
                            src={blogstar}
                            alt="home pic"
                            style={{ maxHeight: "250px" }}
                            className="img-fluid"
                        />
                    </Col>
                </Row>
                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2>Unveiling the secrets: Roadmap to GATE and IES</h2><Badge bg="warning" >Upcoming</Badge>


                                </Card.Title>
                                <Card.Text>
                                Discover the path to success in GATE and IES on 7th Nov 2023 with our expert speaker, Hon. Shri. Anish Singh Rajput. Join us for an insightful webinar organized by the IETE Student Forum. Don't miss this opportunity to gain valuable insights and strategies for your engineering career. 
                                </Card.Text>

                            </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col>
                        <img
                            src={speaker}
                            alt="home pic"
                            style={{ maxHeight: "200px", margin: "2rem" }}
                            className="img-fluid"
                        />
                    </Col>
                </Row>
                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2> Micromaster Workshop </h2><Badge bg="warning" >Upcoming</Badge>


                                </Card.Title>
                                <Card.Text>
                                    Presenting the Deogiri Institute of Engineering and Management Studies, a distinguished institution known for its commitment to providing top-tier education and fostering innovation. Join us for a dynamic two-day workshop on the 8051 microcontroller, in microcontroller workshop offers sessions on introductory concepts, embedded C programming, timers, interrupts and sensors/actuators, providing a well-rounded understanding of microcontrollers, supported by the IETE, which aims to equip students with hands-on microcontroller expertise.

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img
                            src={workshop}
                            alt="home pic"
                            style={{ maxHeight: "250px" }}
                            className="img-fluid"
                        />
                    </Col>
                    
                </Row>
                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2> A New Start! </h2><Badge bg="danger" >Ended</Badge>
                                </Card.Title>
                                <Card.Text>
                                    You're cordially invited to the IETE Forum Inauguration at Deogiri Institute of Engineering and Management Studies. Join us on 27th Oct 2024 to celebrate the launch of this vibrant platform for electronics and telecommunications enthusiasts. Expect insightful speakers, networking opportunities, and a journey into the future of technology. Don't miss this exciting event!
                                </Card.Text>

                            </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col>
                        <img
                            src={inauguration}
                            alt="home pic"
                            style={{ maxHeight: "250px" }}
                            className="img-fluid"
                        />
                    </Col>
                </Row>


            </Container>
        );
    }
}

export default Events;