import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import LandingPage from "./LandingPage";
import CadastroPrestador from "./CadastroPrestador";
import CadastroContratante from "./CadastroContratante";
import Login from "./Login";
import HomePagePrestador from "./HomePagePrestador";
import HomePageContratante from "./HomePageContratante";
import TodosServicos from './TodosServicos';
import PageTestes from "./Testes";
import ServicosMecanicos from "./ServicosMecanicos";
import Contratacao from "./Contratacao";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { LandingPage }  path="/" exact />
           <Route component = { CadastroPrestador } path="/CadastroPrestador" />
           <Route component = { CadastroContratante } path="/CadastroContratante"  />
           <Route component = { Login } path="/Login" />
           <Route component = { HomePagePrestador } path="/Meus Serviços" />
           <Route component = { HomePageContratante } path="/Meus Pedidos" />
           <Route component = { TodosServicos } path="/Todos Serviços" />
           <Route component = { ServicosMecanicos } path="/ServicosMecanicos" />
           <Route component = { Contratacao } path="/Contratacao" />
           <Route component = { PageTestes } path="/Teste" />

       </BrowserRouter>
   )
}

export default Routes;