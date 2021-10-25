import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import LandingPage from "./LandingPage";
import CadastroPrestador from "./CadastroPrestador";
import CadastroContratante from "./CadastroContratante";
import Login from "./Login";
import HomePagePrestador from "./HomePagePrestador";
import HomePageContratante from "./HomePageContratante";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { LandingPage }  path="/" exact />
           <Route component = { CadastroPrestador } path="/CadastroPrestador" />
           <Route component = { CadastroContratante } path="/CadastroContratante"  />
           <Route component = { Login } path="/Login" />
           <Route component = { HomePagePrestador } path="/MeusServicos" />
           <Route component = { HomePageContratante } path="/MeusPedidos" />
       </BrowserRouter>
   )
}

export default Routes;