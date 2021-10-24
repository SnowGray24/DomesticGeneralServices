import '../css/configCSS.css';
import '../css/homePages.css';
import '../css/button.css';
import imgTask from '../img/icones/task.PNG';
import React, { useState } from 'react';
import CardServicoPrestador from './CardServicoPrestador';
import myServices from '../data/CardsPrestador';
import TabBarHorizontal from './TabBarHorizontal';
import CardCategorias from './CardCategorias';


function MeusServicos(){

    let card;
    const verificationItens = () =>{
         if (myServices.length === 0){
            card=<>
                <h5 style={{fontWeight: 'bold'}}>Nenhuma solicitação de serviços por aqui!</h5>
                <h6>Estamos de olho por aqui, assim que uma nova solicitação chegar, você será avisado.</h6>
              </>
        }else{
            card= <CardServicoPrestador/>
        }
    }

    verificationItens()

    return (
        <div>
            { /* Title-bar */ }
            <div style={{marginLeft: '30px',height: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div>
                    <img height="20" src={imgTask} alt="" /> {'>'} Meus Serviços
                </div>
            </div>


            { /* Options */ }
            <TabBarHorizontal card={card} inProgressChecked={true} finishedChecked={false} />
            <CardCategorias/>
        </div>
    );
}

export default MeusServicos;