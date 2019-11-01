import React from 'react';
import './css/BarraNav.css';
import {Breadcrumb} from 'react-bootstrap';

function BarraNav({caminho}) {

    return (
        <div id="barraNav">
            <Breadcrumb>
                {
                    caminho.map(function(e){
                        if (e[1]){
                            return <Breadcrumb.Item active href="#">{e[0]}</Breadcrumb.Item>;
                        }
                        return <Breadcrumb.Item href="#">{e[0]}</Breadcrumb.Item>;
                    })
                }
            </Breadcrumb>
        </div>
    );
}

export default BarraNav;