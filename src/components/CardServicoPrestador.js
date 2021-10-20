import { useState } from "react";
import myServices from "../data/CardsPrestador";
import '../css/homePages.css';

function CardServicoPrestador () {

    const [services, setServices] = useState([...myServices]);
    const [finishedServices, setFinishedServices] = useState([]);
    const [exibe, setExibe] = useState(true)

    function ExcluirServico(idItem) {

        let newArray = services
        
        newArray.splice(idItem, 1)
        
        setServices(newArray)
        
        let cardContainer = document.getElementsByClassName("containerCard")[idItem].remove()
        
       // let cardContainer = document.getElementsByClassName("containerSolicitacoes").remove()
        

        //cardContainer.parentNode.removeChild(cardContainer)
    }


    function FinalizarServico(idItem) {
        
        /* Retirando do Array de serviços em andamento*/
        let newArrayServices = services

        var indexFinalizado = newArrayServices.indexOf(idItem)
        
        let ServicoMarcadoComoFinalizado = newArrayServices.splice(indexFinalizado-1, 1)
        setServices(newArrayServices)
        
      
        let cardContainer2 = document.getElementsByClassName("containerCard")[idItem]
        cardContainer2.style.display="none"

        /* Inserindo no Array de serviços finalizados*/
        let newArrayFinalizados = finishedServices

        newArrayFinalizados.push(...ServicoMarcadoComoFinalizado)
        setFinishedServices(newArrayFinalizados)
    }
    
    return (
        <div className="ContainerSolicitacoes">
            {services.map((item, index)=>(
                <div id={item.id} key={index} className="containerCard" style={{marginLeft: '10px', borderRadius: '2px', width: '300px', boxShadow: '0px 3px 9px rgba(0,0,0,0.2)', padding: '33px', marginBottom: '10px'}}>
                    <div style={{display:"flex", alignItems: 'center', justifyContent: 'flex-start', marginBottom:'10px'}}>
                        <div>
                            <img src={item.image} style={{width:'22px', marginRight: '10px'}} />
                        </div>
                        <div className="titleCard">
                            <h2 style={{color: 'rgba(0,0,0,0.85)', fontSize: '16px',marginBottom:'0px'}}>{item.title}</h2>
                        </div>
                    </div>
                    <p style={{marginBottom: '25px', fontSize: '16px'}}>{item.prediction}</p>
                    {item.isFinished
                     ? <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button className="btFinalizarServicos" onClick={()=>{FinalizarServico(item.id)}}>Finalizar</button>
                        </div>
                     : <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button className="btExcluirServicos" style={{marginRight: '20px'}} onClick={()=>{ExcluirServico(item.id)}}>Excluir</button>
                        <button className="btAceitarServicos">Aceitar</button>
                       </div>
                    }

                </div>
            ))}

        </div>
    )
}

export default CardServicoPrestador;

