import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Contact extends Component {
  render() {
    return (
      <Container>
        <div className="mb-4 mt-2">
          <h1>Get in touch!</h1>
          <h6>Your Feedback, Our Inspiration</h6>
        </div>
        <div>
          <p>
          Every message you send our way holds immense value. Your feedback fuels 
          our continuous journey towards improvement. We thrive on your insights, 
          whether they're accolades or areas for enhancement. Your voice shapes 
          the path we tread.
          </p>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formbasicEmail">
            <Form.Label>
              <h4>Email:</h4>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <h4>Feedback:</h4>
            </Form.Label>
            <div>
              <textarea name="textarea" rows="5" cols="100">
            
              </textarea>
            </div>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <div className="mt-3">
            <span>
              <p className="mb-0">Email: somethinganything@diems.in</p>
              <p className="mt-0">Telephone: 54512 57412</p>
            </span>
          </div>
        </Form>
      </Container>
    );
  }
}

export default Contact;
