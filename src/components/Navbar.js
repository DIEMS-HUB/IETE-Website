import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function NavBar() {

    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>            
          <Navbar.Brand href="#home">IETE DIEMS ISF</Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="m-auto" variant='primary' >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/">About</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/coreteam">Core Team</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )


}

export default NavBar;
