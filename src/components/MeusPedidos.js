import '../css/configCSS.css';
import '../css/homePages.css';
import '../css/button.css';
import React from 'react';
import CardServicoSolicitado from './CardServicoSolicitado';
import TabBarHorizontal from './TabBarHorizontal';
import MeusPedidosItens from '../data/MeusPedidosItens';
import servicosFinalizados from '../data/ServicosFinalizados';


function MeusPedidos(){

    let card
    const verificationItens = () =>{
         if (MeusPedidosItens.length === 0){
             card=<h5 style={{fontWeight: 'bold', height: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>Nenhuma solicitação de serviços por aqui!</h5>
            }else{
            card= <CardServicoSolicitado/>
        }
    }

    verificationItens()

    return (
        <div>
            <TabBarHorizontal card={card} finalizados={servicosFinalizados} inProgressChecked={true} finishedChecked={false} />
        </div>
    );
}

export default MeusPedidos;