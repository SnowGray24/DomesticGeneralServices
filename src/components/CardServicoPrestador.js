import { useState } from "react";
import myServices from "../data/CardsPrestador";

function CardServicoPrestador () {

    const [services, setServices] = useState([...myServices]);

    function ExcluirServico(idItem) {
        /*rascunho para edição de um novo
         let obj = [{
            title: "nada",
            prediction: "10 dias",
            isFinished: false,
            image: null
        }]
        */

        let newArray = services

        var index = newArray.indexOf(idItem)
        newArray.splice(index, 1)
        setServices(newArray)

        let cardContainer = document.getElementsByClassName("containerCard")[idItem]
        cardContainer.style.display="none"
    }

    return (
        <div>
            {myServices.map((item, index)=>(
                <div id={item.id} key={index} className="containerCard" style={{marginLeft: '10px', borderRadius: '2px', width: '300px', boxShadow: '0px 3px 9px rgba(0,0,0,0.2)', padding: '33px', marginBottom: '10px'}}>
                    <div style={{display:"flex", alignItems: 'center', justifyContent: 'flex-start', marginBottom:'10px'}}>
                        <div>
                            <img src={item.image} style={{width:'22px', marginRight: '10px'}} />
                        </div>
                        <div className="titleCard">
                            <h2 style={{color: 'rgba(0,0,0,0.85)', fontSize: '16px',marginBottom:'0px'}}>{item.title}</h2>
                        </div>
                    </div>
                    <p>{item.prediction}</p>
                    {item.isFinished
                     ? <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button className="btFinalizarServicos" style={{width:'91px', display: 'flex', alignItems:'center', justifyContent: 'center'}}>Finalizar</button>
                        </div>
                     : <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button className="btExcluirServicos" style={{marginRight: '20px'}} onClick={()=>{ExcluirServico(item.id)}}>Excluir</button>
                        <button className="btAceitarServicos" style={{background: 'green', border: 'none'}}>Aceitar</button>
                       </div>
                    }

                </div>
            ))}

        </div>
    )
}

export default CardServicoPrestador;

