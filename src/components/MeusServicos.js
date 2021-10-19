

import '../css/configCSS.css';
import '../css/homePages.css';
import '../css/button.css';
import imgIcon from '../img/icones/advertencia.PNG';
import imgIconFinalizado from '../img/icones/okay.PNG';

import imgTask from '../img/icones/task.PNG';

import Itens from './Itens';

import React, {useState} from 'react';

function MeusServicos(){

    const [listaServico, setListaServico] = useState([]);
    const [exemploId, setExemploId] = useState(0); //APAGAR ISSO DEPOIS

    const addItemHandler = (titulo, dias, img) =>{
        setExemploId(exemploId + 1);
        let obj = {Id: exemploId, Titulo: titulo, Dias: dias, Img: img};
        let arr = listaServico.concat(obj);
        setListaServico(arr);
    }

    //CONTINUAR AQUIIIIIIIIIIIIIIIII
    const removeItemHanler = () =>{

        var list = listaServico;
        list.splice(0, 1);

        setListaServico(list);
    }



    
    let card;
    const verificationItens = () =>{
         if (listaServico.length === 0){
            card=<>
                <h5 style={{fontWeight: 'bold'}}>Nenhuma solicitação de serviços por aqui!</h5>
                <h6>Estamos de olho por aqui, assim que uma nova solicitação chegar, você será avisado.</h6>
              </>
        }else{
            card= <div style={{position: 'absolute',width: '80%', height: '520px', overflow: 'scroll', scrollbarWidth: 'none'}}>
                    <h5 style={{color: '#1351B4', marginTop: '28px'}}>
                        Solicitações
                    </h5>

                    <div style={{display: 'flex', marginTop: '2em'}}>
                        {listaServico.map((obj, index) =>(
                            <Itens key={index} typeCard="solicitacao" chave={obj.Id} previcao={obj.Dias} titulo={obj.Titulo} image={obj.Img}  />
                        ))}
                    </div>

                    <h5 style={{color: '#135184', marginTop: '18px'}}>
                        Em andamento
                    </h5>

                    <div style={{display: 'flex', marginTop: '2em'}}>
                        {listaServico.map((obj,index) =>(
                            <Itens key={index} typeCard="emAndamento" chave={obj.Id} previcao={obj.Dias} titulo={obj.Titulo} image={imgIconFinalizado}  />
                        ))}
                    </div>
                </div>
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

                <button onClick={() => addItemHandler("lsdlsjdsjds", 10, imgIcon)}>add</button>
                <button onClick={() => removeItemHanler()}>remover</button>
            </div>
        </div>
    );
}

export default MeusServicos;