import React, { useState } from 'react';
import './css/Principal.css';
import NavbarPage from './NavbarPage';
import { Modal, ButtonToolbar, Image, Col, CardText, CardSubtitle, CardTitle, CardColumns, CardBody, CardImg, Button, Navbar, Nav, Breadcrumb, Card, Accordion, DropdownButton, Dropdown } from 'react-bootstrap';
import Login from './Login';
import PastasPrincipal from './PastasPrincipal';


function Principal({setLayout}) {

  //Modal Login
  const [show, setShow] = useState(false);

  //Modal Login
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <NavbarPage />
      <div id="conteudoPrincipal">
        <div id="cabecalho">
          <ButtonToolbar id="btnPrincipal">
            <Button variant="light">Imprimir</Button>
            <Button variant="info">Visualizar Itens</Button>
            <Button variant="dark" onClick={handleShow}>Menu Admin</Button>
            <Login show={show} handleClose={handleClose} setLayout={setLayout} />
          </ButtonToolbar>
        </div>
        <PastasPrincipal />
      </div>
      <div id="rodapePrincipal">
        <h1>Contatos:</h1>
        <h5>asdasda@algumacoisa.com</h5>
        <h5>asdasda@algumacoisa.com</h5>
        <h5>asdasda@algumacoisa.com</h5>
      </div>
    </div>
  );
}

export default Principal;
