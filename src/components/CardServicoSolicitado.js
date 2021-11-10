import React, { useState } from 'react';
import '../css/configCSS.css';
import '../css/homePages.css';
import '../css/button.css';
import MeusPedidosItens from '../data/MeusPedidosItens';
import servicosFinalizados from "../data/ServicosFinalizados";

function CardServicoSolicitado () {

    const [services, setServices] = useState(MeusPedidosItens);
    const [finishedServices, setFinishedServices] = useState(servicosFinalizados);

        
    let newArray = []

    newArray= MeusPedidosItens
    

function FinalizarServico(item) {
        
        /* Retirando do Array de serviços em andamento*/
        let newArrayServices = services
        let index = newArrayServices.indexOf(item)
        
        let ServicoMarcadoComoFinalizado = newArrayServices.splice(index, 1)

        setServices(newArrayServices)
        
        let cardContainer = document.getElementsByClassName("containerCard")[index]
        cardContainer.remove()

        /* Inserindo no Array de serviços finalizados*/
        let newArrayFinalizados = finishedServices
        newArrayFinalizados.push(...ServicoMarcadoComoFinalizado)
        setFinishedServices(newArrayFinalizados)
        servicosFinalizados.push(...newArrayFinalizados)
    }

    return (
        <div style={{padding: '25px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {MeusPedidosItens.map((item, index)=>(
                <div id={item.id} key={index} className="containerCard" style={{marginLeft: '10px', borderRadius: '2px', width: '300px', boxShadow: '0px 3px 9px rgba(0,0,0,0.2)', padding: '33px', marginBottom: '10px'}}>
                    <div style={{display:"flex", alignItems: 'center', justifyContent: 'flex-start', marginBottom:'10px'}}>
                        <div>
                            <img src={item.image} alt={item.profissao} style={{width:'22px', marginRight: '10px'}} />
                        </div>
                        <div className="titleCard">
                            <h2 style={{color: 'rgba(0,0,0,0.85)', fontSize: '16px',marginBottom:'0px'}}>{item.title}</h2>
                        </div>
                    </div>
                    <p style={{marginBottom: '25px', fontSize: '16px'}}>{item.prediction}</p>
                    {item.isFinished
                    ? <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button className="btFinalizarServicos" onClick={()=>{FinalizarServico(item)}}>Finalizar</button>
                    </div>
                    : <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button className="btExcluirServicos" style={{marginRight: '20px'}}>Excluir</button>
                        <button className="btAceitarServicos">Aceitar</button>
                    </div>
                    }
                </div>
            ))}
        </div>
    )
}
export default CardServicoSolicitado;