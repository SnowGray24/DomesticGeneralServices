import '../css/configCSS.css';
import '../css/homePages.css';
import '../css/button.css';
import React from 'react';
import CardServicoPrestador from './CardServicoPrestador';
import myServices from '../data/CardsPrestador';
import TabBarHorizontal from './TabBarHorizontal';
import TitleBar from './TitleBar';


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
            <TitleBar step1="Meus Serviços"/>
            <TabBarHorizontal card={card} inProgressChecked={true} finishedChecked={false} />
        </div>
    );
}

export default MeusServicos;