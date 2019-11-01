import React from 'react';
import { Card, Accordion, Button, ButtonGroup } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';
import { ReactComponent as EditIcon } from './../feather/edit.svg';
import { ReactComponent as Trash2Icon } from './../feather/trash-2.svg';
import { ReactComponent as EyeIcon } from './../feather/eye.svg';

function ListPasta() {


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
            width: 200
          },
          {
            label: 'Data de criação',
            field: 'data',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Ações',
            field: 'acoes',
            sort: 'asc',
            width: 300
          }
        ],
        rows: [
          {
            nome: 'Violões',
            descricao: 'Aqui contém os violões...',
            data: '12/12/2019',
            acoes: 
                <ButtonGroup id="btnAcoes" aria-label="Basic example">
                    <Button size="sm" className="btn-warning" width="15" type="submit"><EyeIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-info" width="15" type="submit"><EditIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-danger" type="submit"><Trash2Icon width="15" height="20" /></Button>
                </ButtonGroup>
          },
          {
            nome: 'Baterias',
            descricao: 'Aqui contém as baterias...',
            data: '04/05/2018',
            acoes: 
                <ButtonGroup id="btnAcoes" aria-label="Basic example">
                    <Button size="sm" className="btn-warning" width="15" type="submit"><EyeIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-info" type="submit"><EditIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-danger" type="submit"><Trash2Icon width="15" height="20" /></Button>
                </ButtonGroup>
          },
          {
            nome: 'Guitarras',
            descricao: 'Aqui contém as guitarras...',
            data: '04/07/2019',
            acoes: 
                <ButtonGroup id="btnAcoes" aria-label="Basic example">
                    <Button size="sm" className="btn-warning" width="15" type="submit"><EyeIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-info" type="submit"><EditIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-danger" type="submit"><Trash2Icon width="15" height="20" /></Button>
                </ButtonGroup>
          },
          {
            nome: 'Baixos',
            descricao: 'Aqui contém os contrabaixos...',
            data: '12/12/2019',
            acoes: 
                <ButtonGroup id="btnAcoes" aria-label="Basic example">
                    <Button size="sm" className="btn-warning" width="15" type="submit"><EyeIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-info" width="15" type="submit"><EditIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-danger" type="submit"><Trash2Icon width="15" height="20" /></Button>
                </ButtonGroup>
          },
          {
            nome: 'Teclados',
            descricao: 'Aqui contém os teclados...',
            data: '04/05/2018',
            acoes: 
                <ButtonGroup id="btnAcoes" aria-label="Basic example">
                    <Button size="sm" className="btn-warning" width="15" type="submit"><EyeIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-info" type="submit"><EditIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-danger" type="submit"><Trash2Icon width="15" height="20" /></Button>
                </ButtonGroup>
          },
          {
            nome: 'Saxofones',
            descricao: 'Aqui contém os saxofones...',
            data: '04/07/2019',
            acoes: 
                <ButtonGroup id="btnAcoes" aria-label="Basic example">
                    <Button size="sm" className="btn-warning" width="15" type="submit"><EyeIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-info" type="submit"><EditIcon width="15" height="20" /></Button>
                    <Button size="sm" className="btn-danger" type="submit"><Trash2Icon width="15" height="20" /></Button>
                </ButtonGroup>
          }
        ]
    };

    return (
        <MDBDataTable striped bordered hover data={data} />
    );
}

export default ListPasta;