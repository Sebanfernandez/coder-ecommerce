import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/images/aventura-azul-logo.jpg';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="h3" href="#home" ><img src={logo} alt="logo de aventura azul"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="h2 p-3 me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Quienes Somos?</Nav.Link>
            <NavDropdown title="Excursiones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Lanin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Champaqui
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Boca de las Sierras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Mas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Navbar.Collapse>
      <CartWidget />
      </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar;