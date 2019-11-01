import React from "react";
import { MDBModal, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Modal, Button} from 'react-bootstrap';

function Login({ show, handleClose, setLayout}) {

    return (

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Menu Admin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12">
                            <form>
                                <div className="grey-text">
                                    <MDBInput
                                        label="usuário"
                                        icon="user"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Senha"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                    />
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Cancelar</Button>
                <MDBBtn onClick={() => setLayout(1)}>Login</MDBBtn>
            </Modal.Footer>
        </Modal>
    );
};

export default Login;