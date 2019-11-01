import React from 'react';
import './css/Dados.css';

function Dados({children, title}) {

    return (
        <div id="dados">
            <h3>{title}</h3>
            <hr />
            <div id="dadosI">
                {children}
            </div>
        </div>
    );
}

export default Dados;