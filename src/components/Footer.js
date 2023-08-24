import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and developed by IETE DIEMS Technical team</h3>
        </Col>
       
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            
            <li className="social-icons">
              <a
                href="https://twitter.com/protagonist_z0"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagram/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/aditya-simant/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
           
          </ul>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Contact: iete@dietms.org</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
//footer
