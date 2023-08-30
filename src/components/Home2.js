import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
// import myImg from "../../Assets/myImg.png";
import Card from "react-bootstrap/Card";
import About from "./About";
import Faculty from "./Faculty";
import wrldmap from "../assets/undraw_connected_world_wuay.svg"
import {motion} from "framer-motion"
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

class Home2 extends Component{
  render(){
    return(
      <section>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              What is  <span className="purple"><b>IETE</b>  </span> Student Forum ?
            </h1>
            <img
              src={wrldmap}
              alt="world map"
              style={{
                maxHeight: "200px", marginTop: "70px", marginBottom: "50px", display: "block",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
            <Card className="quote-card-view">
              <Card.Body>
              <motion.div
                variants={fadeInAnimationvarient}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
            >
                <blockquote className="blockquote mb-0">
                  <p  style={{ textAlign: "justify", fontSize: "1em" , padding: "20px" }}>

                    <br />
                    IETE ISF is a student-driven initiative affiliated with the Institution of Electronics and Telecommunication Engineers (IETE). It aims to empower students by fostering collaborations with leading industry players, organizing industry-centric events, workshops, seminars, and networking opportunities. By bringing students and industry experts together, IETE ISF facilitates knowledge exchange, career development, and innovation in line with the latest industry trends and practices.

                  </p>



                </blockquote>
                </motion.div>

              </Card.Body>
            </Card>

          </Row>
          <About />
          <Faculty />
        </Container>
      </Container>
    </section>
    )
    
  }
}


export default Home2;
