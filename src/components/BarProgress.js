
import '../css/barProgress.css';
import React from 'react';
import {Col } from 'reactstrap';

function BarProgress (props){
    let barProgress;
    let numberProgress;
    let optionProgress;
    let status;

    if(props.numero === props.status){
        status = 1;
    }else{
        status = 0;
    }
    
    if (status === 0){
        barProgress = "barProgress";
        numberProgress = "numberProgress";
        optionProgress = "optionProgress";
    }else{
        barProgress = "barProgressActive";
        numberProgress = "numberProgressActive";
        optionProgress = "optionProgressActive"; 
    }
    return (
        <Col>
            <div className={barProgress}>
                    <div className={numberProgress}>{props.numero}</div>
                    <div className={optionProgress}>{props.opcao}</div>
            </div>
        </Col>
    );
}

export default BarProgress;