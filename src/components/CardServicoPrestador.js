import { useEffect, useState } from "react";
import myServices from "../data/CardsPrestador";
import '../css/homePages.css';
import { useRouteMatch } from "react-router";

function CardServicoPrestador () {

    const [services, setServices] = useState(myServices);
    const [tb, setTb] =useState([])
    const [finishedServices, setFinishedServices] = useState([]);

    
    let newArray = []

    newArray= services
    
    useEffect(()=>{
        setServices(newArray)
    },[])
    

    const ExcluirServico = (item)=> {

        let index = newArray.indexOf(item)
        console.log(index)
        newArray.splice(index,1)

        setServices(newArray)
        let cardContainer = document.getElementsByClassName("containerCard")[index]
        cardContainer.remove()
    }
    


    
    function FinalizarServico(idItem) {
        
        /* Retirando do Array de serviços em andamento*/
        let newArrayServices = services
        
        let ServicoMarcadoComoFinalizado = newArrayServices.splice(idItem, 1)

        setServices(newArrayServices)
        
        let cardContainer = document.getElementsByClassName("containerCard")[idItem]
        cardContainer.remove()

        /* Inserindo no Array de serviços finalizados*/
        let newArrayFinalizados = finishedServices
        newArrayFinalizados.push(...ServicoMarcadoComoFinalizado)
        setFinishedServices(newArrayFinalizados)
    }
    
    return (
        <div className="ContainerSolicitacoes">
            {
            services.map((item, index)=>(
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
                        <button className="btExcluirServicos" style={{marginRight: '20px'}} onClick={()=>{ExcluirServico(item)}}>Excluir</button>
                        <button className="btAceitarServicos">Aceitar</button>
                    </div>
                    }

                </div>
            ))
            }
        </div>
    )
}

export default CardServicoPrestador;

