import React from "react";
import 
{ 
  Nav, 
  Navbar, 
  Form, 
  FormControl, 
  Button 
} from "react-bootstrap";

function TopMenu() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="#">Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Películas</Nav.Link>
          <Nav.Link href="#">Documentales</Nav.Link>
          <Nav.Link href="#">Estrenos</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Escriba algo..." className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopMenu;
