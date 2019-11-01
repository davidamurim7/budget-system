import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CadPasta() {
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
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Digite o nome da pasta..."
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Data de criação</Form.Label>
                    <br />
                    <DatePicker className="form-control" dateFormat="dd/MM/yyyy" selected={startDate} onChange={date => setStartDate(date)} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="8" controlId="validationCustom03">
                    <Form.Label>Descrição</Form.Label>
                    <CKEditor editor={ ClassicEditor } data="<p>Nenhuma descrição.</p>" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Button className="btn-success" type="submit">Cadastrar</Button>
        </Form>
    );
}

export default CadPasta;