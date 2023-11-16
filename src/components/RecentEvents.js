import React, {  } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"
import underconst from "../assets/undraw_under_construction_-46-pa.svg"


function RecentEvents() {
    return (
        <section>
            <Container fluid className="recent-section">
                <Container>
                    <Row className="home-about-description">
                        <h2 className="heading-name">Check out our recent events!</h2>
                        <img
                            src={underconst}
                            alt="Nothing to show here"
                            className="img-fluid"
                            style={{
                                maxHeight: "332px", marginTop: "70px", marginBottom: "50px", display: "block",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                        />
                        <p style={{ textAlign: "center", fontSize: "1.3em", padding: "20px" }}>
                            Here's a sneak peek into our recent events. Click the button below to explore more.
                        </p>
                        <Link to="/events">
                            <button className="button-core-team" style={{padding:'10px',color:'white',borderRadius:'5px'}} target="_blank">Go to Events</button>
                        </Link>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default RecentEvents;