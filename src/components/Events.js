import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import underconst from "../assets/undraw_under_construction_-46-pa.svg"
import Card from 'react-bootstrap/Card';
import inaugration from '../assets/Inaugration.png'
import Badge from 'react-bootstrap/Badge';


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
                            src={inaugration}
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