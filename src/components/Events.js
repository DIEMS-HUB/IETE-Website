import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import underconst from "../assets/undraw_under_construction_-46-pa.svg"

class Events extends Component {
    render() {
        return (


            <Container fluid className="project-section">
                <h1 className="project-heading" style={{ textAlign: "center" }}>
                    Stay tuned for upcoming <span className='purple'>events</span> !
                </h1>
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
            </Container>
        );
    }
}

export default Events;