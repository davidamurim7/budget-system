import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { ReactComponent as AlignLeftIcon } from './../feather/align-left.svg';

function MenuTop({sidebarTogle, setLayout}) {
  return (
    <div id="menuTop">
      <Navbar>
        <Nav.Link id="iconTop" href="#icon" onClick={() => sidebarTogle()}><AlignLeftIcon width="30" height="40" /></Nav.Link>
        <Nav className="mr-auto" id="btnTop">
          <Nav.Link href="#link">Usuário</Nav.Link>
          <Nav.Link href="#link">Empresa</Nav.Link>
          <Nav.Link href="#link">Contatos</Nav.Link>
          <Nav.Link href="#link">Sobre</Nav.Link>
          <Nav.Link href="#link">Ajuda</Nav.Link>
          <Nav.Link href="#link" onClick={() => setLayout(0)}>Sair</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MenuTop;
