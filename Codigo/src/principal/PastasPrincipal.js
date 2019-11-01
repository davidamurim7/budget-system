import React, { useState } from 'react';
import './css/ProdutosPrincipal.css';
import {ProgressBar,Button, Image, Col, CardColumns, Card} from 'react-bootstrap';
import ProdutosPrincipal from './ProdutosPrincipal';


function PastasPrincipal() {

  const [show, setShow] = useState(false);

  return (
        <div id="pastas">
          <ProdutosPrincipal show={show} setShow={setShow} />
          <CardColumns>
            <Card style={{ width: '22rem' }} id="pasta">
              <Card.Body>
                <Col xs={10} md={10}>
                  <Image src="img/violao1.jpeg" roundedCircle style={{ marginLeft: '40px', width: '200px', height: '160px' }} />
                </Col>
                <br />
                <Card.Title>Violões</Card.Title>
                <Card.Text>
                  Aqui contém os violões mais usados atualmente, testados e avaliados por músicos profissionais.
                </Card.Text>
                <Button variant="default" onClick={() => setShow(true)}>Visualizar</Button>
                <br />
                <br />
                <ProgressBar style={{height:'3px'}} variant="success" now={20} />
              </Card.Body>
            </Card>

            <Card style={{ width: '22rem' }} id="pasta">
              <Card.Body>
                <Col xs={10} md={10}>
                  <Image src="img/bateria.jpeg" roundedCircle style={{ marginLeft: '40px', width: '200px', height: '160px' }} />
                </Col>
                <br />
                <Card.Title>Baterias</Card.Title>
                <Card.Text>
                  Aqui contém as baterias mais usadas atualmente, testadas e avaliadas por músicos profissionais.
                </Card.Text>
                <Button variant="default" onClick={() => setShow(true)}>Visualizar</Button>
                <br />
                <br />
                <ProgressBar style={{height:'3px'}} variant="success" now={50} />
              </Card.Body>
            </Card>

            <Card style={{ width: '22rem' }} id="pasta">
              <Card.Body>
                <Col xs={10} md={10}>
                  <Image src="img/guitarra.jpeg" roundedCircle style={{ marginLeft: '40px', width: '200px', height: '160px' }} />
                </Col>
                <br />
                <Card.Title>Guitarras</Card.Title>
                <Card.Text>
                  Aqui contém as guitarras mais usadas atualmente, testadas e avaliadas por músicos profissionais.
                </Card.Text>
                <Button variant="default" onClick={() => setShow(true)}>Visualizar</Button>
                <br />
                <br />
                <ProgressBar style={{height:'3px'}} variant="success" now={80} />
              </Card.Body>
            </Card>


            <Card style={{ width: '22rem' }} id="pasta">
              <Card.Body>
                <Col xs={10} md={10}>
                  <Image src="img/baixo.jpeg" roundedCircle style={{ marginLeft: '40px', width: '200px', height: '160px' }} />
                </Col>
                <br />
                <Card.Title>Baixos</Card.Title>
                <Card.Text>
                  Aqui contém os contrabaixos mais usados atualmente, testados e avaliados por músicos profissionais.
                </Card.Text>
                <Button variant="default" onClick={() => setShow(true)}>Visualizar</Button>
                <br />
                <br />
                <ProgressBar style={{height:'3px'}} variant="success" now={10} />
              </Card.Body>
            </Card>

            <Card style={{ width: '22rem' }} id="pasta">
              <Card.Body>
                <Col xs={10} md={10}>
                  <Image src="img/teclado.jpeg" roundedCircle style={{ marginLeft: '40px', width: '200px', height: '160px' }} />
                </Col>
                <br />
                <Card.Title>Teclados</Card.Title>
                <Card.Text>
                  Aqui contém os teclados mais usados atualmente, testados e avaliados por músicos profissionais.
                </Card.Text>
                <Button variant="default" onClick={() => setShow(true)}>Visualizar</Button>
                <br />
                <br />
                <ProgressBar style={{height:'3px'}} variant="success" now={40} />
              </Card.Body>
            </Card>

            <Card style={{ width: '22rem' }} id="pasta">
              <Card.Body>
                <Col xs={10} md={10}>
                  <Image src="img/sax.jpeg" roundedCircle style={{ marginLeft: '40px', width: '200px', height: '160px' }} />
                </Col>
                <br />
                <Card.Title>Saxofones</Card.Title>
                <Card.Text>
                  Aqui contém os saxofones mais usados atualmente, testados e avaliados por músicos profissionais.
                </Card.Text>
                <Button variant="default" onClick={() => setShow(true)}>Visualizar</Button>
                <br />
                <br />
                <ProgressBar style={{height:'3px'}} variant="success" now={60} />
              </Card.Body>
            </Card>




          </CardColumns>
        </div>
  );
}

export default PastasPrincipal;
