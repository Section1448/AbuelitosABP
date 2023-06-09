import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
          <img
              alt=""
              src="/tecLogo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Tec Mty</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>
            <Nav.Link as={Link} to="/clases">Clases</Nav.Link>
            <Nav.Link as={Link} to="/contador">Contador</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Proyectos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }

export default NavBar;