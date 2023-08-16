import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


class Aboutcard extends Component {
    render() {
        return (

            <Card className="quote-card-view">
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p style={{ textAlign: "justify" }}>
                        <b className="purple">IETE DIEMS ISF </b>  began as a small group of enthusiasts who shared a passion for electronics and technology. We've evolved into a thriving community that fosters creativity and learning through workshops, seminars, and events.
                            <br />
                            <br />
                            <br />
                            
                            <h4><ImPointRight /><b> Our vision</b></h4>
                           
                            We envision DIEMS IETE ISF as a trailblazer in tech. Empowering members to lead in technology , we cultivate skills for industry impact and global contributions
                            <br />
                            <br />
                            <br />
                            <h4><ImPointRight /><b> Our mission</b>
                            </h4>
                            Educate through workshops, connect minds for innovation, and drive change. DIEMS IETE ISF nurtures a culture of curiosity, collaboration, and positive tech-driven transformation.
                        
                            <br />
                            <br />
                            <br />
                            <h4><ImPointRight /><b> Motto</b></h4>

                                <b>Empowering Tomorrow: By Students, For Students.</b>
                            <br />
                            Our motto encapsulates the essence of DIEMS IETE ISF's mission and ethos. We are dedicated to cultivating the next generation of technology leaders who will shape the future. Our focus is not only on technical knowledge but also on leadership, innovation, and community-building.
                            <br />
                            <br />
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>
        );
    }
}

export default Aboutcard;