import '../css/configCSS.css';
import '../css/homePages.css';
import '../css/button.css';
import imgTask from '../img/icones/task.PNG';
import React from 'react';
import CardServicoPrestador from './CardServicoPrestador';
import myServices from '../data/CardsPrestador';

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
            <div>
                <nav className='barOptionsMeusServicos' style={{display: 'flex'}}>
                    <div style={{display: 'flex'}}>
                        <ul className='resetUlLi'  style={{marginLeft: '16px'}}>
                            <li className="optionItemSelect" >Em andamento</li>
                        </ul>

                        <ul className='resetUlLi'>
                            <li>Finalizado</li>
                        </ul>
                    </div>
                </nav>

                <div style={{height: 'calc(100vh - 156px)', width: '100%'}} className='itemCentralizar'>
                    {card}
                </div>
            </div>
        </div>
    );
}

export default MeusServicos;