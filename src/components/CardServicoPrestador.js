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
        console.log("services: "+ services.length)
        console.log("newArray "+ newArray.length)

        if(newArray.length >= 1){
            newArray.splice(idItem, 1)
            setServices(newArray)
        }
        
        let cardContainer = document.getElementsByClassName("containerCard")[idItem]
        cardContainer.style.display="none"
    }

    return (
        <div>
            {myServices.map((item, index)=>(
                <div id={item.id} key={index} className="containerCard" style={{marginLeft: '10px', borderRadius: '2px', width: '300px', boxShadow: '0px 3px 9px rgba(0,0,0,0.2)', padding: '33px', marginBottom: '10px'}}>
                    <div style={{display:"flex"}}>
                        <div>
                            <img src={item.image} />
                        </div>
                        <div className="titleCard">
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                    <p>{item.prediction}</p>
                    {item.isFinished
                     ?  <button className="btConcluir">Finalizar</button>
                     : <div style={{display: 'flex'}}>
                        <button className="btCancelar" style={{marginRight: '20px'}} onClick={()=>{ExcluirServico(item.id)}}>Excluir</button>
                        <button className="btProx" style={{background: 'green', border: 'none'}}>Aceitar</button>
                       </div>
                    }
                </div>
            ))}

        </div>
    )
}

export default CardServicoPrestador;

