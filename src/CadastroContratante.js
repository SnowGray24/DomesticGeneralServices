import './css/layout.css';
import './css/button.css';
import logo from './img/logo2.PNG';

import BarProgress from './components/BarProgress';

import React, {useState} from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';


function CadastroPrestador (){
    const [fieldForm, setFieldForm] = useState(1);

    const antForm = () =>{
        if (fieldForm === 3){
            document.getElementById("formField1").style.display = "none";
            document.getElementById("formField2").style.display = "block";
            document.getElementById("formField3").style.display = "none";

            document.getElementById("btConcluirCadastro").style.display = "none";
            document.getElementById("btContinuar").style.display = "block";
        }else if (fieldForm === 2){
            document.getElementById("formField1").style.display = "block";
            document.getElementById("formField2").style.display = "none";
            document.getElementById("formField3").style.display = "none";
            

            
            document.getElementById("btAnt").style.display = "none";
            document.getElementById("btCancelar").style.display = "block";

        }

        if (fieldForm > 1)
            setFieldForm(fieldForm - 1);

    }

    const proxForm = () =>{
        if (fieldForm === 1){
            document.getElementById("btAnt").style.display = "block";
            document.getElementById("btCancelar").style.display = "none";

            document.getElementById("formField1").style.display = "none";
            document.getElementById("formField2").style.display = "block";
            document.getElementById("formField3").style.display = "none";
        }else if (fieldForm === 2){
            document.getElementById("formField1").style.display = "none";
            document.getElementById("formField2").style.display = "none";
            document.getElementById("formField3").style.display = "block";

            document.getElementById("btConcluirCadastro").style.display = "block";
            document.getElementById("btContinuar").style.display = "none";
        }

        if (fieldForm < 3)
            setFieldForm(fieldForm + 1);
        

    }


    
    const [contratanteName, setContratanteName] = useState("");
    const [contratanteCpf, setContratanteCpf] = useState("");
    const [contratanteTelephone, setContratanteTelephone] = useState("");
    const [contratanteSex, setContratanteSex] = useState("");
    const [contratanteUF, setContratanteUF] = useState("");
    const [contratanteCEP, setContratanteCEP] = useState("");
    const [contratanteCity, setContratanteCity] = useState("");
    const [contratanteRoad, setContratanteRoad] = useState("");
    const [contratanteDistrict, setContratanteDistrict] = useState("");
    const [contratanteNumberHouse, setContratanteNumberHouse] = useState("");
    const [contratanteRefPointer, setContratanteRefPointer] = useState("");
    const [contratanteEmail, setContratanteEmail] = useState("");
    const [contratantePassword, setContratantePassword] = useState("");

    const [error, setError] = useState("");


    /** Função para adicionar um novo usuário no Banco de Dados improvisados */
    const addUsuario = () =>{
        
        const newUser = {
            name: contratanteName,
            cpf: contratanteCpf,
            telephone: contratanteTelephone,
            sex: contratanteSex,
            UF: contratanteUF,
            cep: contratanteCEP,
            city: contratanteCity,
            road: contratanteRoad,
            district: contratanteDistrict,
            numberHouse: contratanteNumberHouse,
            refPointer: contratanteRefPointer,
            email: contratanteEmail,
            password: contratantePassword,
            TypeAccount: "contratante"
        }

        /** Aqui deverá ser aplicar algo para enviar esses dados para o banco de dados */

        setError(
            <div style={{backgroundColor: 'green', color: 'white', padding: '1em', borderRadius: '1em', marginTop: '1em'}}>
                Cadastro efetuado com sucesso! <a href="/Login">Clique aqui</a> para entrar
            </div>
        )

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
                        <BarProgress numero={3} opcao="Dados do Login" status={fieldForm} />
                    </Row>
                </nav>

                <Form id="formField1" style={{marginTop: "37px"}} className="formConfigCadastroPrestador">

                    <FormGroup>
                        <Label for="contratanteName"><span className="campoObrigatorio">*</span> Nome</Label>
                        <Input type="text" onChange={(e) => setContratanteName(e.target.value)} id="contratanteName" placeholder="Insira seu nome" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="contratanteCpf"><span className="campoObrigatorio">*</span> CPF</Label>
                        <Input type="text" onChange={(e) => setContratanteCpf(e.target.value)} id="contratanteCpf" placeholder="Insira seu CPF" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="contratanteTelephone"><span className="campoObrigatorio">*</span> Telefone</Label>
                        <Input type="text" onChange={(e) => setContratanteTelephone(e.target.value)} id="contratanteTelephone" placeholder="(DDD) 90000-0000" />
                    </FormGroup>

                    <FormGroup>
                        <Label><span className="campoObrigatorio">*</span> Sexo</Label>
                        <Input type="select" bsSize="sm" placeholder="Selecione seu sexo">
                            <option onClick={(e) => setContratanteSex(e.target.value)}>Masculino</option>
                            <option onClick={(e) => setContratanteSex(e.target.value)}>Feminino</option>
                            <option onClick={(e) => setContratanteSex(e.target.value)}>Outros</option>
                        </Input>
                    </FormGroup>

                </Form>



                <Form id="formField2" style={{marginTop: "37px", display: "none"}} className="formConfigCadastroPrestador">
                    <FormGroup>
                        <Label><span className="campoObrigatorio">*</span> UF</Label>
                        <Input type="select" bsSize="sm" placeholder="Escolha um gênero">
                            <option onClick={(e) => setContratanteUF(e.target.value)}>AC</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>AL</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>AP</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>AM</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>BA</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>CE</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>DF</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>ES</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>GO</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>MA</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>MT</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>MS</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>MG</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>PA</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>PB</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>PR</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>PE</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>PI</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>BA</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>RJ</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>RN</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>RS</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>RO</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>RR</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>SC</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>SP</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>SE</option>
                            <option onClick={(e) => setContratanteUF(e.target.value)}>TO</option>
                        </Input>
                    </FormGroup>


                    <FormGroup>
                        <Label for="contratanteCEP"><span className="campoObrigatorio">*</span> CEP</Label>
                        <Input type="text" onChange={(e) => setContratanteCEP(e.target.value)} id="contratanteCEP" placeholder="Insira o CEP" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="contratanteCity"><span className="campoObrigatorio">*</span> Cidade</Label>
                        <Input type="text" onChange={(e) => setContratanteCity(e.target.value)} id="contratanteCity" placeholder="Insira o nome da cidade" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="contratanteRoad"><span className="campoObrigatorio">*</span> Rua</Label>
                        <Input type="text" onChange={(e) => setContratanteRoad(e.target.value)} id="contratanteRoad" placeholder="Insira o nome da rua" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="contratanteDistrict"><span className="campoObrigatorio">*</span> Bairro</Label>
                        <Input type="text" onChange={(e) => setContratanteDistrict(e.target.value)} id="contratanteDistrict" placeholder="Insira o nome do bairro" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="contratanteNumberHouse"><span className="campoObrigatorio">*</span> Número</Label>
                        <Input type="text" onChange={(e) => setContratanteNumberHouse(e.target.value)} id="ContratanteNumberHouse" placeholder="Insira o número da casa" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="contratanteRefPointer">Ponto de Referência</Label>
                        <Input type="text" onChange={(e) => setContratanteRefPointer(e.target.value)} id="contratanteRefPointer" placeholder="Insira o ponto de referência" />
                    </FormGroup>
                </Form>


                <Form id="formField3" style={{marginTop: "37px", display: "none"}} className="formConfigCadastroPrestador">
                    <FormGroup>
                        <Label for="contratanteEmail" hidden><span className="campoObrigatorio">*</span> Email</Label>
                        <Input type="email" onChange={(e) => setContratanteEmail(e.target.value)} id="contratanteEmail" placeholder="Insira seu email" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="contratantePassword" hidden><span className="campoObrigatorio">*</span> Senha</Label>
                        <Input type="password" onChange={(e) => setContratantePassword(e.target.value)} id="contratantePassword" placeholder="Insira sua senha" />
                    </FormGroup>
                </Form>



                <Row style={{marginTop: "30px"}}>
                    <Col id="btCancelar">
                        <a href="/"><button className="btCancelar">Cancelar</button></a>
                    </Col>

                    <Col id="btAnt" style={{display: "none"}}>
                        <button className="btAnt" onClick={antForm}>Voltar</button>
                    </Col>

                    <Col id="btContinuar">
                        <button className="btProx" onClick={proxForm} >Continuar</button>
                    </Col>

                    <Col id="btConcluirCadastro" style={{display: "none"}}>
                        <button className="btConcluir" onClick={() => addUsuario()} >Realizar Cadastro</button>
                    </Col>
                </Row>
                {error}

                <p style={{marginTop: "14px"}}>Já tem uma conta? <a href="/Login" style={{textDecoration: "none"}} className="facaLogin">Faça login.</a></p>



            </section>

            <section className="layoutAzul">
                <p style={{color: 'white', display: "flex", flexDirection: "column", alignItems: "center", marginTop: "165px", fontSize: "36px"}}>Reinvente-se!<br /><span>Seja <span style={{fontWeight: "bold"}}>Torxs Services</span></span></p>
            
                <p style={{color: 'white', display: "flex", flexDirection: "column", alignItems: "center", fontSize: "24px", marginTop: "50%"}}>Cada necessidade uma solução.</p>
            </section>
        </div>

    );
}

export default CadastroPrestador;