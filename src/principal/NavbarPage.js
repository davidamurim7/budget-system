import React, { useState } from "react";
import { NavDropdown, Image, Col, CardText, CardSubtitle, CardTitle, CardColumns, CardBody, CardImg, Button, Navbar, Nav, Breadcrumb, Card, Accordion, DropdownButton, Dropdown } from 'react-bootstrap';
import { ReactComponent as TwitterIcon } from './../feather/twitter.svg';
import { ReactComponent as InstagramIcon } from './../feather/instagram.svg';
import { ReactComponent as FacebookIcon } from './../feather/facebook.svg';
import { ReactComponent as AtSignIcon } from './../feather/at-sign.svg';

function NavbarPage() {
  const [isOpen, setIsOpen] = useState(false);

  var toggleCollapse = () => {
    setIsOpen(!this.state.isOpen);
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Loja de Música</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Contatos</Nav.Link>
          <Nav.Link href="#pricing">Ajuda</Nav.Link>
          <Nav.Link href="#pricing">Sobre</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link href="#deets"><TwitterIcon width="20" height="20" /></Nav.Link>
          <Nav.Link eventKey={2} href="#memes"><InstagramIcon width="20" height="20" /></Nav.Link>
          <Nav.Link eventKey={3} href="#memes"><FacebookIcon width="20" height="20" /></Nav.Link>
          <Nav.Link eventKey={4} href="#memes"><AtSignIcon width="20" height="20" /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarPage;