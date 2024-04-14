import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import inauguration from '../assets/events/inaugration2.png'
import blogstar from '../assets/events/blogstar.png'
import Badge from 'react-bootstrap/Badge';
import workshop from '../assets/events/workshop.jfif'
import { Button } from "react-bootstrap";
// import speaker from '../assets/undraw_conference_speaker_re_1rna.svg'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import gateMock from '../assets/events/gateMock.png'
import mockInterview from '../assets/events/mockInterview.png'
import embedded from '../assets/events/embedded.png'
import employability from '../assets/events/employability.jpg'
import carrierOptions from '../assets/events/carrierOptions.jpg'
import roadmapGate from '../assets/events/roadmapGate.jpg'

class Events extends Component {
    render() {
        return (
            <Container fluid className="event-section" >


      {/* Adding new events with differnt section */}
    
    <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3 side-space"
      justify
    >
      <Tab eventKey="home" title="Upcoming Events">
                <h1 className="project-heading" style={{ textAlign: "center" , marginTop:"50px"  }}>
                    Stay tuned for upcoming <span className='purple'>events</span>!
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
                            className="img-fluid img-center"
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
                            className="img-fluid img-center"
                        />
                    </Col>  
                </Row>
      </Tab>

      <Tab eventKey="profile" title="Conducted Events">

                <h1 className="project-heading" style={{ textAlign: "center" , marginTop:"50px" }}>
                    Take a look at our <span className='purple'>past events</span>!
                </h1>

                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2>Event 7 : Seminar Session - Career Options & Base of Selection </h2>
                                </Card.Title>
                                <Card.Text>
                                <p className='DateColor'>6 April 2024</p>
                                The DIEMS IETE Student Forum organized a seminar on career options and the base of selection on April 6, 2024. The seminar was conducted by Mr. Rohit Dalal. The event aimed to provide insights into various industries, market trends, and career paths. Mr. Dalal, an expert in career counseling, advised attendees on identifying personal interests, assessing aptitudes, and evaluating educational backgrounds for informed career decisions. The seminar offered valuable guidance for students career journeys.
                                </Card.Text>
                                <Button className="button-core-team" target='_blank' href="https://drive.google.com/file/d/1MIdLPDG-xsoGcX7xxQG_cEt5aMfRrwYQ/view?usp=sharing"
                                style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"fit-content" , marginTop:"10px" }}>
                                View Report
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img
                            src={carrierOptions}
                            alt="home pic"
                            style={{ maxHeight: "250px" }}
                            className="img-fluid img-center"
                        />
                    </Col>
                </Row>


                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2>Event 6 : Mock GATE Exam</h2>
                                </Card.Title>
                                <Card.Text>
                                <p className='DateColor'>5 April 2024</p>
                                The mock GATE exam served as a highly beneficial tool for participants, providing them with a valuable opportunity to gauge their readiness for the actual GATE exam. By simulating the exam environment and format, it helped students identify their strengths and weaknesses, allowing them to focus their efforts on areas needing improvement. DIEMS IETE Student Forum proudly presented a Mock Gate Exam on April 5, 2024. This insightful event, tailored to benefit 120 eager participants.
                                </Card.Text>
                                <Button className="button-core-team" target='_blank' href="https://drive.google.com/file/d/1MIEEz3-oqaHhsqLlEwwn_XEQAIGh3xOE/view?usp=sharing"
                                style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"fit-content" , marginTop:"10px" }}>
                                View Report
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img
                            src={gateMock}
                            alt="home pic"
                            style={{ maxHeight: "250px" }}
                            className="img-fluid img-center"
                        />
                    </Col>
                </Row>

                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2> Event 5 : Expert Talk Session - Etiquettes and Employability </h2>
                                </Card.Title>
                                <Card.Text>
                                <p className='DateColor'>28 March 2024 </p>
                                On March 28, 2024, the DIEMS IETE Students Forum hosted an expert talk session on Etiquettes and Employability, presented by Shri. Abhijit Dharmadhikari. The session aimed to provide valuable insights into the importance of proper etiquette in the professional realm and its impact on employability. Attendees had the opportunity to learn essential skills and behaviors conducive to success in the workplace, fostering a culture of professionalism and effective communication.
                                </Card.Text>
                                <Button className="button-core-team" target='_blank' href="https://drive.google.com/file/d/1MbI-9a6uJDZlXwJDcaj-4m9rg4Zo3ljN/view?usp=sharing"
                                style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"fit-content" , marginTop:"10px" }}>
                                View Report
                                </Button>

                            </Card.Body> 
                        </Card>
                    </Col>
                    <Col>
                        <img
                            src={employability}
                            alt="home pic"
                            style={{ maxHeight: "250px" }}
                            className="img-fluid img-center"
                        />
                    </Col>
                </Row>

                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2>Event 4 : Mock Interviews </h2>
                                </Card.Title>
                                <Card.Text>
                                <p className='DateColor'>27 March 2024</p>
                                DIEMS IETE Student Forum, in collaboration with the Training and Placement Cells, DIEMS, proudly presented a Mock Interview seminar session on March 27, 2024. This insightful event, tailored to benefit 58 eager participants, featured Mr. Parwez Khan, an esteemed NLP Master Practitioner and Corporate Trainer, as the distinguished guest speaker. Mr. Khan's wealth of experience and expertise illuminated the session, providing invaluable insights and guidance to the attendees. The event served as a platform for students to refine their interview skills, glean industry knowledge, and gain confidence in navigating the corporate landscape.
                                </Card.Text>
                                <Button className="button-core-team" target='_blank' href="https://youtu.be/dlG5yFC8spQ?si=D_lxaWFiTbb_wmcZ"
                                style={{ marginTop: "10px"}}>
                                YouTube
                                </Button>
                                <Button className="button-core-team" target='_blank' href="https://drive.google.com/file/d/1MSfdaJoSBAB8CErDwJ1JGIM3bwQdvS7k/view?usp=sharing"
                                style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"fit-content" , marginTop:"10px" }}>
                                View Report
                                </Button>
                            
                            </Card.Body>                        
                        </Card>
                    </Col>
                    <Col>
                        <img
                            src={mockInterview}
                            alt="home pic"
                            style={{ maxHeight: "250px" }}
                            className="img-fluid img-center"
                        />
                    </Col>
                </Row>



                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2>Event 3 : Seminar Session - Career opportunities as developer in Embedded System Domain</h2>
                                </Card.Title>
                                <Card.Text>
                                <p className='DateColor'>17 Feb 2024</p>
                                At the DIEMS IETE Student Forum for an enlightening Seminar Session on "Career Opportunities as a Developer in the Embedded System Domain" on February 17, 2024. Our esteemed guest speaker, Mr. Shubham Shastri, Senior Software Engineer at Qualcomm, will share invaluable insights into this burgeoning field. This session promises to be an insightful journey into the world of embedded systems, offering a wealth of knowledge and guidance to our 150 beneficiaries.
                                </Card.Text>
                                <Button className="button-core-team" target='_blank' href="https://drive.google.com/file/d/1MYYfJMZbMaIvcW6yCgNIE7SAv3COCZQq/view?usp=sharing"
                                style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"fit-content" , marginTop:"10px" }}>
                                View Report
                                </Button>

                            </Card.Body>   
                        </Card>
                    </Col>
                    <Col>
                        <img
                            src={embedded}
                            alt="home pic"
                            style={{ maxHeight: "250px" }}
                            className="img-fluid img-center"
                        />
                    </Col>
                </Row>

                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2> Event 2 : Webinar Session -  Unveiling the secrets : Roadmap to GATE and IES</h2>
                                </Card.Title>
                                <Card.Text>
                                <p className='DateColor'>8 Nov 2023</p>
                                Discover the path to success in GATE and IES on 8th Nov 2023 with our expert speaker, Hon. Shri. Anish Singh Rajput. Join us for an insightful webinar organized by the IETE Student Forum. Don't miss this opportunity to gain valuable insights and strategies for your engineering career. 
                                </Card.Text>

                                <Button className="button-core-team" target='_blank' href="https://youtu.be/5Eo4zPQLhx0"
                                style={{ marginTop: "10px"}}>
                                YouTube
                                </Button>
                                <Button className="button-core-team" target='_blank' href="https://drive.google.com/file/d/1MW7sonKm_VLOrPqOHSiucZgfXIEWb_ay/view?usp=sharing"
                                style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"fit-content" , marginTop:"10px" }}>
                                View Report
                                </Button>

                            </Card.Body>    
                        </Card>
                    </Col>
                    <Col>
                        <img
                            src={roadmapGate}
                            alt="home pic"
                            style={{ maxHeight: "250px" }}
                            className="img-fluid img-center"
                        />
                    </Col>
                </Row>

                <Row className='event-row'>
                    <Col md={8}>
                        <Card className='event-card'>
                            <Card.Body style={{ padding: "2rem" }}>

                                <Card.Title><h2> Event 1 : DIEMS IETE Student Forum Inauguration Program & Tech-Talk By Shri. Sushil Samvatsar</h2>
                                </Card.Title>
                                <Card.Text>
                                <p className='DateColor'>27 Oct 2023</p>
                                You're cordially invited to the IETE Forum Inauguration at Deogiri Institute of Engineering and Management Studies. Join us on 27th Oct 2023 to celebrate the launch of this vibrant platform for electronics and telecommunications enthusiasts. Expect insightful speakers, networking opportunities, and a journey into the future of technology. Don't miss this exciting event!
                                </Card.Text>

                                <Button className="button-core-team" target='_blank' href="https://drive.google.com/file/d/1CqbPr63T1bC89nu9UE-bSqei8djVNqis/view"
                                style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"fit-content" , marginTop:"10px" }}>
                                View Report
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img
                            src={inauguration}
                            alt="home pic"
                            style={{ maxHeight: "250px" }}
                            className="img-fluid img-center"
                        />
                    </Col>
                </Row>

      </Tab>

    </Tabs>

export default JustifiedExample;



            </Container>
        );
    }
}

export default Events;