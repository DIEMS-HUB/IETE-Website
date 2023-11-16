import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from './Aboutcard';
import quoteasset from "../assets/quoteasset.png"
import { motion } from 'framer-motion';

const fadeInAnimationvarient ={
    initial:{
        opacity: 0,
        y: 100,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            type: "spring"
        }
    },
};

class About extends Component {
    render() {
        return (
            <motion.div
                variants={fadeInAnimationvarient}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
            >
            <Container fluid className="about-section">
                <Container>
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                            md={5}
                            style={{ paddingTop: "120px", paddingBottom: "50px" }}
                            className="about-img"
                            
                        >
                            <img src={quoteasset} alt="about" className="img-fluid  home-logo-iete" />
                        </Col>
                        <Col
                            md={7}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "50px",
                            }}
                        >
                            
                            <Aboutcard />
                        </Col>
                        
                    </Row>
                </Container>
            </Container>
            </motion.div>
        );
    }
}

export default About;