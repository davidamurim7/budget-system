import React, { useState } from 'react';
import { Button, Form, InputGroup, Col, Row, Container, Image } from 'react-bootstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AltProduto() {
    const [validated, setValidated] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Pasta</Form.Label>
                    <Form.Control as="select">
                    <option>Pasta 1</option>
                    <option>Pasta 2</option>
                    <option>Pasta 3</option>
                    <option>Pasta 4</option>
                    <option>Pasta 5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control as="select">
                    <option>Produto 1</option>
                    <option>Produto 2</option>
                    <option>Produto 3</option>
                    <option>Produto 4</option>
                    <option>Produto 5</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                    <Form.Label>Preço R$</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="Digite o preço do Produto..."
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>Data de validade</Form.Label>
                    <br />
                    <DatePicker className="form-control" dateFormat="dd/MM/yyyy" selected={startDate} onChange={date => setStartDate(date)} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="8" controlId="validationCustom05">
                    <Form.Label>Descrição</Form.Label>
                    <CKEditor editor={ ClassicEditor } data="<p>Nenhuma descrição.</p>" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Button className="btn-info" type="submit">Alterar</Button>
        </Form>
    );
}

export default AltProduto;