// import './NavBarcss.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget'
// import bikeStoreLogo from '../img/bikeStoreLogo.svg'

const NavBar = () => {
  console.log('soy el NavBar, me renderice')
    return(
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">
        {/* <img src = { bikeStoreLogo } /> */}
            BikeStore
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
        
        <CartWidget />
        
        </Container>
      </Navbar>
    );
}


export default NavBar;