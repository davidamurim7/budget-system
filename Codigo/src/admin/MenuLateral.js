import React, {useState} from 'react';
import './css/MenuLateral.css';
import { Nav, Accordion, Card, Button } from 'react-bootstrap';
import { ReactComponent as HomeIcon } from './../feather/home.svg';
import { ReactComponent as ChevronDownIcon } from './../feather/chevron-down.svg';
import { ReactComponent as BoxIcon } from './../feather/box.svg';
import { ReactComponent as ListIcon } from './../feather/list.svg';
import { ReactComponent as PlusIcon } from './../feather/plus.svg';
import { ReactComponent as Edit2Icon } from './../feather/edit-2.svg';
import { ReactComponent as Trash2Icon } from './../feather/trash-2.svg';
import { ReactComponent as ChevronRightIcon } from './../feather/chevron-right.svg';

function MenuLateral({visivel, mudaAba}) {

    const [menuAtivo, setMenuAtivo] = useState("-1");

    const controlaMenu = (numMenu) => {
        if(menuAtivo == numMenu){
            setMenuAtivo("-1");
        }else{
            setMenuAtivo(numMenu);
        }
    }

    const controlaVisu = () => {
        if(visivel == 1){
            return{display: "block"};
        }else{
            return{display: "none"};
        }
    }

    return (
        <div id="menuLateral" style={controlaVisu()}>
            <Nav defaultActiveKey="/home" className="flex-column">
                <br />
                <Card id="titulo">
                    <BoxIcon width="30" height="25" />
                    <span id="conteudoTitulo"> Loja de Música</span>
                </Card>
                <br />
                <span id="menuItem"> Menu</span>
                <Card id="itemLateralC">
                    <Accordion.Toggle id="itemLateral" as={Card.Header} onClick={() => mudaAba(0)}>
                        <HomeIcon width="30" height="20" />
                        <span id="tituloItem"> Início</span>
                    </Accordion.Toggle>
                </Card>
                <Accordion activeKey={menuAtivo}>
                    <Card id="itemLateralC">
                        <Accordion.Toggle id="itemLateral" as={Card.Header} eventKey="0" onClick={() => controlaMenu("0")}>
                            <ListIcon width="30" height="20" />
                            <span id="tituloItem">  Listar</span>
                            <ChevronDownIcon id="setaIcon" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" onClick={() => mudaAba(1)}>
                            <Card id="conteudoItemC">
                                <span id="celulaItem">
                                    <ChevronRightIcon width="30" height="12" />
                                    <span id="conteudoItem"> Pastas</span>
                                </span>
                            </Card>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="0" onClick={() => mudaAba(2)}>
                            <Card id="conteudoItemC">
                                <span id="celulaItem">
                                    <ChevronRightIcon width="30" height="12" />
                                    <span id="conteudoItem"> Produtos</span>
                                </span>
                            </Card>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion activeKey={menuAtivo}>
                    <Card id="itemLateralC">
                        <Accordion.Toggle id="itemLateral" as={Card.Header} eventKey="1" onClick={() => controlaMenu("1")}>
                            <PlusIcon width="30" height="20" />
                            <span id="tituloItem"> Cadastrar</span>
                            <ChevronDownIcon id="setaIcon" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1" onClick={() => mudaAba(3)}>
                            <Card id="conteudoItemC">
                                <span id="celulaItem">
                                    <ChevronRightIcon width="30" height="12" />
                                    <span id="conteudoItem"> Pastas</span>
                                </span>
                            </Card>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1" onClick={() => mudaAba(4)}>
                            <Card id="conteudoItemC">
                                <span id="celulaItem">
                                    <ChevronRightIcon width="30" height="12" />
                                    <span id="conteudoItem"> Produtos</span>
                                </span>
                            </Card>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion activeKey={menuAtivo}>
                    <Card id="itemLateralC">
                        <Accordion.Toggle id="itemLateral" as={Card.Header} eventKey="2" onClick={() => controlaMenu("2")}>
                            <Edit2Icon width="30" height="20" />
                            <span id="tituloItem"> Alterar</span>
                            <ChevronDownIcon id="setaIcon" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2" onClick={() => mudaAba(5)}>
                            <Card id="conteudoItemC">
                                <span id="celulaItem">
                                    <ChevronRightIcon width="30" height="12" />
                                    <span id="conteudoItem"> Pastas</span>
                                </span>
                            </Card>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="2" onClick={() => mudaAba(6)}>
                            <Card id="conteudoItemC">
                                <span id="celulaItem">
                                    <ChevronRightIcon width="30" height="12" />
                                    <span id="conteudoItem"> Produtos</span>
                                </span>
                            </Card>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion activeKey={menuAtivo}>
                    <Card id="itemLateralC">
                        <Accordion.Toggle id="itemLateral" as={Card.Header} eventKey="3" onClick={() => controlaMenu("3")}>
                            <Trash2Icon width="30" height="20" />
                            <span id="tituloItem"> Excluir</span>
                            <ChevronDownIcon id="setaIcon" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3" onClick={() => mudaAba(7)}>
                            <Card id="conteudoItemC">
                                <span id="celulaItem">
                                    <ChevronRightIcon width="30" height="12" />
                                    <span id="conteudoItem"> Pastas</span>
                                </span>
                            </Card>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="3" onClick={() => mudaAba(8)}>
                            <Card id="conteudoItemC">
                                <span id="celulaItem">
                                    <ChevronRightIcon width="30" height="12" />
                                    <span id="conteudoItem"> Produtos</span>
                                </span>
                            </Card>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                {/* <Card id="rodapeItem">
                    <Button id="rodapeItemCB" variant="outline-secondary"><ListIcon/></Button>
                    <Button id="rodapeItemCB" variant="outline-secondary"><ListIcon/></Button>
                    <Button id="rodapeItemCB" variant="outline-secondary"><ListIcon/></Button>
                    <Button id="rodapeItemCB" variant="outline-secondary"><ListIcon/></Button>
                </Card> */}
            </Nav>
        </div>
    );
}

export default MenuLateral;
