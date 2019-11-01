import React, { useState } from 'react';
import { Card, Accordion, Button, ButtonGroup, Form, Col } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';
import { ReactComponent as EditIcon } from './../feather/edit.svg';
import { ReactComponent as Trash2Icon } from './../feather/trash-2.svg';
import { ReactComponent as EyeIcon } from './../feather/eye.svg';

function ListProduto() {


    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const data = {
        columns: [
          {
            label: 'Nome',
            field: 'nome',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Descrição',
            field: 'descricao',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Data de validade',
            field: 'data',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Preço',
            field: 'preco',
            sort: 'asc',
            width: 50
          },
          {
            label: 'Ações',
            field: 'acoes',
            sort: 'asc',
            width: 200
          }
        ],
        rows: [
          {
            nome: 'Produto 1',
            descricao: 'Nenhuma Descrição.',
            data: '18/01/2019',
            preco: 'R$ 12,00',
            acoes: 
                <ButtonGroup id="btnAcoesProd" aria-label="Basic example">
                    <Button size="sm" className="btn-warning" width="15" type="submit"><EyeIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-info" width="15" type="submit"><EditIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-danger" type="submit"><Trash2Icon width="15" height="20" /></Button>
                </ButtonGroup>
          },
          {
            nome: 'Produto 2',
            descricao: 'Produto especial',
            data: '15/08/2018',
            preco: 'R$ 150,00',
            acoes: 
                <ButtonGroup id="btnAcoesProd" aria-label="Basic example">
                    <Button size="sm" className="btn-warning" width="15" type="submit"><EyeIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-info" type="submit"><EditIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-danger" type="submit"><Trash2Icon width="15" height="20" /></Button>
                </ButtonGroup>
          },
          {
            nome: 'Produto 3',
            descricao: 'Produto em promoção',
            data: '01/09/2017',
            preco: 'R$ 100,00',
            acoes: 
                <ButtonGroup id="btnAcoesProd" aria-label="Basic example">
                    <Button size="sm" className="btn-warning" width="15" type="submit"><EyeIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-info" type="submit"><EditIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-danger" type="submit"><Trash2Icon width="15" height="20" /></Button>
                </ButtonGroup>
          }
        ]
    };

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom04">
                        <Form.Label>Pasta</Form.Label>
                        <Form.Control as="select">
                        <option>Violões</option>
                        <option>Baterias</option>
                        <option>Guitarras</option>
                        <option>Baixos</option>
                        <option>Teclados</option>
                        <option>Saxofones</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            </Form>
            <br />
            <MDBDataTable striped bordered hover data={data} />
        </div>
    );
}

export default ListProduto;