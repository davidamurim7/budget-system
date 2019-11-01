import React, { Fragment } from "react";
import './css/ProdutosPrincipal.css';
import {MDBBtn, MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";
import {FormControl,InputGroup, Input, ButtonGroup, Form, Nav, Modal, Button, ButtonToolbar } from 'react-bootstrap';
import Carrossel from './Carrossel';


function ProdutosPrincipal({ show, setShow }) {


  return (
    <>
      <Modal
        size="xl"
        show={show}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body> 
          <h3>Violões</h3>
          <hr />
          <div id="bodyPro">
            <div id="imagemPro">
              <Carrossel />
            </div>
            <div id="dadosPro">
              <h4>Violão Elétrico com Afinador Embutido</h4>
              <br />
              <h5><strong>R$ 500,00</strong></h5>
              <br />
              <p>
                O violão tal da marca exemplo é um dos mais usados por músicos profissionais.
                Disponível nas cores azul, branca e amarela. Acompanha um afinador embutido com duração
                de bateria de até 3 meses.
              </p>
              <hr />
              <Form className="form-inline">
                <InputGroup className="mb-3" id="inputQuant">
                  <InputGroup.Prepend>
                    <button type="button" id="btnE"> - </button>
                  </InputGroup.Prepend>
                  <input type="text" id="textQuant" />
                  <InputGroup.Prepend>
                    <button type="button" id="btnD"> + </button>
                  </InputGroup.Prepend>
                </InputGroup>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Adicionar a lista"
                />
              </Form>
            </div>
          </div>
          <br />
          <hr />
          <MDBRow style={{ position: 'relative', left: '380px', height:'30px' }}>
            <MDBCol>
              <MDBPagination className="mb-5" color="teal">
                <MDBPageItem>
                  <MDBPageNav aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem active>
                  <MDBPageNav>
                    1 <span className="sr-only">(current)</span>
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>2</MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>3</MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>4</MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>5</MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>6</MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>7</MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>8</MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav>9</MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav aria-label="Previous">
                    <span aria-hidden="true">&raquo;</span>
                  </MDBPageNav>
                </MDBPageItem>
              </MDBPagination>
            </MDBCol>
          </MDBRow>
          <div id="btnProCtrl">
            <Fragment>
              <MDBBtn color="danger" onClick={() => setShow(false)}>Cancelar</MDBBtn>
              <MDBBtn color="success">Concluir</MDBBtn>
            </Fragment>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProdutosPrincipal;