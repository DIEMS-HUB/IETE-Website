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
                href="https://www.linkedin.com/company/iete-diems-isf/"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/iete_diems/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaInstagram />
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
