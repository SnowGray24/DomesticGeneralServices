import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import LandingPage from "./LandingPage";
import CadastroPrestador from "./CadastroPrestador";
import CadastroContratante from "./CadastroContratante";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { LandingPage }  path="/" exact />
           <Route component = { CadastroPrestador } path="/CadastroPrestador" />
           <Route component = { CadastroContratante } path="/CadastroContratante"  />
       </BrowserRouter>
   )
}

export default Routes;