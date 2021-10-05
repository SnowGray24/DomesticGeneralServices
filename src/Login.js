import './css/layout.css';
import "./css/button.css";

import logo from './img/logo2.PNG';
import iconeCadeado from './img/icones/cadeado.png';
import iconeEmail from './img/icones/email.png';

import React from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

function Login (){

    return (
        <div style={{display: "flex"}}>
            <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="layoutAzul">
                <div style={{marginTop: '165px'}}>
                    <p style={{color: 'white', fontSize: '36px', fontStyle: 'normal', lineHeight: '44px'}}><b>Torxs Services</b><br />Tudo que <b>você</b><br /><b>precisa</b> com a<br />qualidade que você<br />merece. </p>
                </div>

                <div style={{marginTop: '180px'}}>
                    <p style={{color: 'white', fontSize: '24px', fontStyle: 'normal', lineHeight: '29px'}}>Cada necessidade uma solução.</p>
                </div>
            </section>

            <section className="layoutBranco layoutCentralizar">
                <img style={{marginTop: "125px"}} src={logo} alt="logo" height="75.52" />
                <Label style={{fontSize: "16px", marginTop: "14px"}} ><span style={{color: 'rgba(0, 0, 0, 0.85)'}}>Faça seu Login para continuar!</span></Label>
            
                <Form style={{marginTop: "39px"}} className="formConfigCadastroPrestador">
                    <FormGroup style={{display: 'flex'}}>
                        <div className="bordarIconeLogin" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <span style={{width: "44px"}}>
                                <img style={{ marginLeft: '10px'}} height="22" src={iconeEmail} alt="" />
                            </span>
                        </div>
                        <Input className="bordarInputLogin" type="email" placeholder="E-mail" />
                    </FormGroup>

                    <FormGroup style={{marginTop: "15px", display: 'flex'}}>
                        <div className="bordarIconeLogin" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <span style={{width: '44px'}}>
                                <img style={{ marginLeft: '10px'}} height='27' src={iconeCadeado} alt="" />
                            </span>
                        </div>

                        <Input className="bordarInputLogin" type="password" placeholder="Senha" />
                    </FormGroup>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end'}}>  
                        <button style={{color: "rgba(50, 61, 135, 1)"}} className="btZerado">Esqueceu a senha?</button>
                    </div>

                    <FormGroup style={{display: "flex", alignItems: "center", flexDirection: "column", marginTop: "41px"}}>
                        <button className="btAzul">Login</button>
                    </FormGroup>
                </Form>

                <p style={{marginTop: "21px", color: 'rgba(0, 0, 0, 0.65)'}}>Não tem uma conta? <a style={{color: 'rgba(50, 61, 135, 1)'}}>Cadastra-se</a></p>
            
            </section>
        </div>
    )
}

export default Login;