import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import your custom CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (
            <div className="page-content">
            <Container>
                <Row>
                    {/* Your content */}
                </Row>
            </Container>
            <footer className="footer">
            <Row>
                        <Col className="text-center">
                            <p>Made with ❤ IETE DIEMS.</p>
                        </Col>
                        </Row>
                <Container>
                    
                    <Row className="footer-content">
                    
                        <Col xs={12} md={3} className="text-center">
                            <h5>Coming Soon On</h5>
                            <ul className="list-unstyled d-flex social-icons">
                                <li>
                                    <a href="https://www.instagram.com/your_instagram_username">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/your_linkedin_profile">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/your_twitter_username">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://Facebook.com/">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                       
                        <Col xs={12} md={3} className="text-right">
                            <h5>Contact Details</h5>
                            <ul className="list-unstyled d-flex social-icons">
                               <p>iete@dietms.org<br/>
                                Deogiri Institute of Engineering and Management Studies,
                                Railway Station Road, Chh. Sambhajinagar – 431005.
                               </p>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <p>&copy; {new Date().getFullYear()} IETE DIEMS ISF. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
            </div>
        );
    }
}

library.add(fab);
export default Footer;
