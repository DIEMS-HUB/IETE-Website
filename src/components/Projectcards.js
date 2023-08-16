import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsLinkedin } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}><b>{props.title}</b></Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <Button variant="danger" href={props.ghLink} style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
          <BsLinkedin /> &nbsp;
          LinkedIn
        </Button>
        
        </Card.Body>
    </Card>
  );
}
export default ProjectCards;
