import './css/layout.css';
import logo from './img/logo2.PNG';

import BarProgress from './components/BarProgress';

import React from 'react';
import { Row, Form, FormGroup, Label, Input } from 'reactstrap';



function CadastroPrestador (){

    return (
        <div className="cadastroPrestador">
            <section className="layoutBranco layoutCentralizar">
       
                <img height='85' src={logo} alt="Logo da marca Torxs Services." />
                
                <span className="fontConfig">Conheça seus serviços com qualidade e</span>
                <span className="fontConfig">resposabilidade. Cadastre-se no Torxs Services!</span>

                <nav className="layoutOptions">
                    <Row>
                    <BarProgress numero="1" opcao="Dados Pessoais" />
                    <BarProgress numero="2" opcao="Endereço" />
                    <BarProgress numero="3" opcao="Serviços" />
                    <BarProgress numero="4" opcao="Dados do Login" />
                    </Row>
                </nav>


                <Form>

                    <FormGroup>
                        <Label for="exampleEmail">Nome</Label>
                        <Input type="email" name="email" id="exampleEmail" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleCPF">CPF</Label>
                        <Input type="text" name="cpf" id="exampleCPF" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleCNPJ">CNPJ</Label>
                        <Input type="text" name="cnpj" id="exampleCNPJ" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleTelefone">Telefone</Label>
                        <Input type="text" name="telefone" id="exampleTelefone" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleDate">Data</Label>
                        <Input
                        type="date"
                        name="date"
                        id="exampleDate" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Sexo</Label>
                        <Input type="select" bsSize="sm">
                            <option>Masculino</option>
                            <option>Feminino</option>
                            <option>Outros</option>
                        </Input>
                    </FormGroup>

                </Form>


            </section>

            <section className="layoutAzul">

            </section>
        </div>

    );
}

export default CadastroPrestador;