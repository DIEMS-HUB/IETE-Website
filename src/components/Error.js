import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import {
    AiOutlineHome
} from "react-icons/ai";
import errorimg from "../assets/page_not_found.svg"
import Button from "react-bootstrap/Button";
import Home from './Home';


class Error extends Component {
    render() {
        return (
            <Container fluid className="home-about-section" id="about">
                <Container>
                    <Row className="home-about-description" style={{ textAlign: "center", marginTop: "50px", padding:"40px", }}>
                        <h1 className="project-heading" >
                            Invaild Page requested!
                        </h1>
                        <p style={{textAlign:"center", paddingTop:"20px"}}>Make sure you are following the correct URL!</p>
                    </Row>
                    <Row>
                        <img
                            src={errorimg}
                            alt="Join pic"
                            style={{ maxHeight: "190px",
                            background: "#ffffff",
                            padding:"30px",
                            margin:"50px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            maxWidth:"400px"
                         }}
                            className="iete-join-logo img-fluid main-iete-logo"
                        />
                    </Row>
                    <Row>
                        <Button
                            className="button-join "
                            href='/'
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "200px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "15px"
                            }}
                        >
                            <AiOutlineHome /> &nbsp;
                                Homepage
                        </Button>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Error;