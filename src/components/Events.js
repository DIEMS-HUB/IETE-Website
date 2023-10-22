import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import underconst from "../assets/undraw_under_construction_-46-pa.svg"
import Card from 'react-bootstrap/Card';
//import inaugration from '../assets/Inaugration.png'
import inauguration from '../assets/inauguration2.png'
import Badge from 'react-bootstrap/Badge';
import workshop from '../assets/workshop.jfif'



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

                                <Card.Title><h2> A New Start! </h2><Badge bg="danger" >Upcoming</Badge>
                                   

                                </Card.Title>
                                <Card.Text>
                                    You're cordially invited to the IETE Forum Inauguration at Deogiri Institute of Engineering and Management Studies. Join us on 25th Oct 2024 to celebrate the launch of this vibrant platform for electronics and telecommunications enthusiasts. Expect insightful speakers, networking opportunities, and a journey into the future of technology. Don't miss this exciting event!
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
                
                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2> Micromaster! </h2><Badge bg="danger" >2 Days Workshop</Badge>
                                   

                                </Card.Title>
                                <Card.Text>
                                Presenting the Deogiri Institute of Engineering and Management Studies, a distinguished institution known for its commitment to providing top-tier education and fostering innovation. Join us for a dynamic two-day workshop on the 8051 microcontroller, supported by the IETE, which aims to equip students with hands-on microcontroller expertise.
                                 
                                The Micro Master schedule is as follows: <br></br><b>On October 30th</b>, starting at 10:00 AM, there will be an industrial visit. <br></br> <b>on October 31st</b>, which is Workshop Day 1. This day will feature several sessions, including a two-hour Session 1 that covers an introduction to the Microcontroller and 8051, providing an overview of its architecture and features. After this session, there will be a lunch break, followed by Session 2, which focuses on the basics of Embedded C and Keli IDE. A tea break is scheduled before Session 3, which delves into the topic of timers, counters, and delays. <br></br> <b>November 1st</b>, which is Workshop Day 2. Here, Session 4 will address interrupts and event handling. A lunch break is scheduled, after which Session 5 will concentrate on serial communication. Another tea break will precede Session 6, which covers sensors and actuators and includes a mini-project. The final session, Session 7, will be dedicated to project presentations and the distribution of certificates. <br></br> <b>Venue</b> for this event is Plot No. P-30, MIDC Shendra, Aurangabad - 431154.
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
                

            </Container>
        );
    }
}

export default Events;