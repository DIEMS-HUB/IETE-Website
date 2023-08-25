import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsLinkedin } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>

        <Button className="button-core-team" href={props.ghLink} target="_blank"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <BsLinkedin /> &nbsp;
          LinkedIn
        </Button>

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
