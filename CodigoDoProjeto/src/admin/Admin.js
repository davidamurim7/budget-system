import React, { useState } from 'react';
import './css/Admin.css';
import MenuTop from './MenuTop';
import { Button, Navbar, Nav, Breadcrumb, Card, Accordion, DropdownButton, Dropdown } from 'react-bootstrap';
import MenuLateral from './MenuLateral';
import Dados from './Dados';
import ListPasta from './ListPasta';
import BarraNav from './BarraNav';
import CadPasta from './CadPasta';
import CadProduto from './CadProduto';
import AltPasta from './AltPasta';
import AltProduto from './AltProduto';
import ExcPasta from './ExcPasta';
import ExcProduto from './ExcProduto';
import ListProduto from './ListProduto';
import Inicio from './Inicio';

function Admin({setLayout}) {

  const [visivelSidebar, setVisivelSidebar] = useState(1);
  const [caminhoNav, setCaminhoNav] = useState([['Início', 1]]);
  const [dados, setDados] = useState({
    title: "Início",
    content: <Inicio />
  });

  const sidebarTogle = () => setVisivelSidebar(visivelSidebar ^ 1);

  const mudaAba = (aba) => {
    if (aba == 0) {
      setDados({
        title: "Início",
        content: <Inicio />
      });
      setCaminhoNav([['Início', 1]])
    }else if (aba == 1) {
      setDados({
        title: "Pastas Cadastradas",
        content: <ListPasta />
      });
      setCaminhoNav([['Início', 0] , ['Listar Pastas', 1]])
    }else if (aba == 2) {
      setDados({
        title: "Produtos Cadastrados",
        content: <ListProduto />
      });
      setCaminhoNav([['Início', 0] , ['Listar Produtos', 1]])
    }else if (aba == 3) {
      setDados({
        title: "Cadastrar Pastas",
        content: <CadPasta />
      });
      setCaminhoNav([['Início', 0] , ['Cadastrar Pastas', 1]])
    }else if (aba == 4) {
      setDados({
        title: "Cadastrar Produtos",
        content: <CadProduto />
      });
      setCaminhoNav([['Início', 0] , ['Cadastrar Produtos', 1]])
    }else if (aba == 5) {
      setDados({
        title: "Alterar Pastas",
        content: <AltPasta />
      });
      setCaminhoNav([['Início', 0] , ['Alterar Pastas', 1]])
    }else if (aba == 6) {
      setDados({
        title: "Alterar Produtos",
        content: <AltProduto />
      });
      setCaminhoNav([['Início', 0] , ['Alterar Produtos', 1]])
    }else if (aba == 7) {
      setDados({
        title: "Excluir Pastas",
        content: <ExcPasta />
      });
      setCaminhoNav([['Início', 0] , ['Excluir Pastas', 1]])
    }else if (aba == 8) {
      setDados({
        title: "Excluir Produtos",
        content: <ExcProduto />
      });
      setCaminhoNav([['Início', 0] , ['Excluir Produtos', 1]])
    }

  }

  return (
      <div id="tudo">
        <MenuLateral visivel={visivelSidebar} mudaAba={mudaAba} />
        <div id="conteudo">
          <MenuTop sidebarTogle={sidebarTogle} setLayout={setLayout} />
          <BarraNav caminho={caminhoNav} />
          <Dados title={dados.title}>
            {dados.content}
          </Dados>
          <div id="rodape">
            <p>2019 - © Loja de Música</p>
          </div>
        </div>
      </div>
  );
}

export default Admin;
