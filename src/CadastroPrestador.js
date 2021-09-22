import './css/layout.css';
import './css/button.css';
import logo from './img/logo2.PNG';

import BarProgress from './components/BarProgress';

import React, {useState} from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';


function CadastroPrestador (){
    const [fieldForm, setFieldForm] = useState(1);

    const proxForm = () =>{
        if (fieldForm === 1){
            document.getElementById("formField1").style.display = "none";
            document.getElementById("formField2").style.display = "block";
            document.getElementById("formField3").style.display = "none";
            document.getElementById("formField4").style.display = "none";

        }else if (fieldForm === 2){
            document.getElementById("formField1").style.display = "none";
            document.getElementById("formField2").style.display = "none";
            document.getElementById("formField3").style.display = "block";
            document.getElementById("formField4").style.display = "none";
        }else if (fieldForm === 3){
            document.getElementById("formField1").style.display = "none";
            document.getElementById("formField2").style.display = "none";
            document.getElementById("formField3").style.display = "none";
            document.getElementById("formField4").style.display = "block";
        }

        setFieldForm(fieldForm + 1);
        verificationLimits();

    }

    const verificationLimits = () =>{
        if (fieldForm > 3){
            setFieldForm(4);
        }else if (fieldForm < 1){
            setFieldForm(1);
        }
    }


    return (
        <div className="cadastroPrestador">
            <section className="layoutBranco layoutCentralizar">
       
                <img className="logoSite" height='85' src={logo} alt="Logo da marca Torxs Services." />
                
                <span style={{marginTop: "1em"}} className="fontConfig">Conheça seus serviços com qualidade e</span>
                <span className="fontConfig">resposabilidade. Cadastre-se no Torxs Services!</span>

                <nav style={{marginTop: "30px"}} className="layoutOptions">
                    <Row>
                        <BarProgress numero={1} opcao="Dados Pessoais" status={fieldForm} />
                        <BarProgress numero={2} opcao="Endereço" status={fieldForm} />
                        <BarProgress numero={3} opcao="Serviços" status={fieldForm} />
                        <BarProgress numero={4} opcao="Dados do Login" status={fieldForm} />
                    </Row>
                </nav>


                <Form id="formField1" style={{marginTop: "37px"}} className="formConfigCadastroPrestador">

                    <FormGroup>
                        <Label for="exampleEmail"><span className="campoObrigatorio">*</span> Nome</Label>
                        <Input type="email" name="email" id="exampleEmail" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleCPF"><span className="campoObrigatorio">*</span> CPF</Label>
                        <Input type="text" name="cpf" id="exampleCPF" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleCNPJ">CNPJ</Label>
                        <Input type="text" name="cnpj" id="exampleCNPJ" />
                    </FormGroup>


                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="exampleTelefone"><span className="campoObrigatorio">*</span> Telefone</Label>
                                <Input type="text" name="telefone" id="exampleTelefone" />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="exampleDate"><span className="campoObrigatorio">*</span> Data de Nascimento</Label>
                                <Input
                                type="date"
                                name="date"
                                id="exampleDate" />
                            </FormGroup>
                        </Col>
                    </Row>



                    <FormGroup>
                        <Label><span className="campoObrigatorio">*</span> Sexo</Label>
                        <Input type="select" bsSize="sm" placeholder="Escolha um gênero">
                            <option>Masculino</option>
                            <option>Feminino</option>
                            <option>Outros</option>
                        </Input>
                    </FormGroup>

                </Form>



                <Form id="formField2" style={{marginTop: "37px", display: "none"}} className="formConfigCadastroPrestador">
                    <FormGroup>
                        <Label><span className="campoObrigatorio">*</span> UF</Label>
                        <Input type="select" bsSize="sm" placeholder="Escolha um gênero">
                            <option>AC</option>
                            <option>AL</option>
                            <option>AP</option>
                            <option>AM</option>
                            <option>BA</option>
                            <option>CE</option>
                            <option>DF</option>
                            <option>ES</option>
                            <option>GO</option>
                            <option>MA</option>
                            <option>MT</option>
                            <option>MS</option>
                            <option>MG</option>
                            <option>PA</option>
                            <option>PB</option>
                            <option>PR</option>
                            <option>PE</option>
                            <option>PI</option>
                            <option>BA</option>
                            <option>RJ</option>
                            <option>RN</option>
                            <option>RS</option>
                            <option>RO</option>
                            <option>RR</option>
                            <option>SC</option>
                            <option>SP</option>
                            <option>SE</option>
                            <option>TO</option>
                        </Input>
                    </FormGroup>


                    <FormGroup>
                        <Label for="exampleCEP"><span className="campoObrigatorio">*</span> CEP</Label>
                        <Input type="text" name="cep" id="exampleCEP" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleCidade"><span className="campoObrigatorio">*</span> Cidade</Label>
                        <Input type="text" name="cidade" id="exampleCidade" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleRua"><span className="campoObrigatorio">*</span> Rua</Label>
                        <Input type="text" name="rua" id="exampleRua" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleBairro"><span className="campoObrigatorio">*</span> Bairro</Label>
                        <Input type="text" name="bairro" id="exampleBairro" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleNumero"><span className="campoObrigatorio">*</span> Número</Label>
                        <Input type="text" name="numero" id="exampleNumero" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePReferencia">Ponto de Referência</Label>
                        <Input type="text" name="pontoDEreferencia" id="examplePReferencia" />
                    </FormGroup>
                </Form>

                <Form Form id="formField3" style={{marginTop: "37px", display: "none"}} className="formConfigCadastroPrestador">

                    <div><Label><span className="campoObrigatorio">*</span> Categorias</Label></div>
                    <FormGroup check inline>
                        <Label check>
                        <Input type="checkbox" /> Limpeza
                        </Label>
                    </FormGroup>

                    <FormGroup check inline>
                        <Label check>
                        <Input type="checkbox" /> Mecânica
                        </Label>
                    </FormGroup>





                    <FormGroup>
                        <Label for="exampleDescricao"><span className="campoObrigatorio">*</span> Descrição</Label>
                        <Input type="textarea" name="descricao" id="exampleDescricao" />
                    </FormGroup>

                </Form>



                <Form id="formField4" style={{marginTop: "37px", display: "none"}} className="formConfigCadastroPrestador">
                    <FormGroup>
                        <Label for="exampleEmail" hidden><span className="campoObrigatorio">*</span> Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Insira seu email" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword" hidden><span className="campoObrigatorio">*</span> Senha</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Insira sua senha" />
                    </FormGroup>
                </Form>



                <div style={{marginTop: "30px"}}>
                    <button className="btCancelar">Cancelar</button>
                    <button className="btProx" onClick={proxForm} >Continuar</button>
                </div>

                <p style={{marginTop: "14px"}}>Já tem uma conta? <a href="/" className="facaLogin">Faça login.</a></p>



            </section>

            <section className="layoutAzul">

            </section>
        </div>

    );
}

export default CadastroPrestador;