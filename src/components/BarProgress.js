
import '../css/barProgress.css';
import React from 'react';
import {Col } from 'reactstrap';

function BarProgress (props){

    return (
        <Col>
            <div className="barProgress">
                        <div className="numberProgress">{props.numero}</div>
                        <div className="optionProgress">{props.opcao}</div>
            </div>
        </Col>
    );
}

export default BarProgress;