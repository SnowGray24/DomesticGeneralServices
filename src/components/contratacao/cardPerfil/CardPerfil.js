import "../../../css/configCSS.css"
import Avatar from './avatar/Avatar';
import perfilPessoa from '../../../data/User';
import React, {useState} from 'react';
import meusPedidosContratante from '../../../data/MeusPedidosItens';
import isFinished from "../../../img/icones/okay.PNG";

 let item =
        {
            id: 88,
            title: "Serviço de Mecânica",
            prediction: "Previsão de término em 3 dias.",
            isFinished: true,
            image: isFinished
        }
    

const CardPerfil = () =>{
    
    const [hired, setHired] = useState(perfilPessoa.isHired);
    const [meusPedidos, setMeusPedidos] = useState(meusPedidosContratante);


    
    let newArray = []
    newArray= meusPedidos

    const chanceHired = () =>{
        if (perfilPessoa.isHired === false){
            perfilPessoa.isHired = true;
          //  newArray.push(item)
            meusPedidosContratante.push(item)
           // setMeusPedidos(newArray)
            console.log(meusPedidosContratante)

          
        }else{
            perfilPessoa.isHired = false;
        }
        setHired(perfilPessoa.isHired);
    }

    const checkHired = (status) =>{
        if (status === false){
            return (
                <button onClick={()=>(chanceHired())} style={{marginTop: '68px', border: 'none', width: '315px', height: '32px', backgroundColor: '#323D87', color: 'white'}}>
                    Contratar Serviço
                </button>
            )
        }else{
            return (
                <button onClick={()=>(chanceHired())} style={{marginTop: '68px', border: 'none', width: '315px', height: '32px', backgroundColor: '#FF4842', color: 'white'}}>
                    Cancelar Contratação
                </button>
            )

        }
    }

    return (
        <div className="pageCentralizar" style={{width: '415px', padding: '0 20px', border: '1px solid rgba(235, 235, 235, 1)', borderRadius: '5px', marginBottom: '19px', maxHeight: '415px' }}>

            { /*  Sigla do nome  */ }
            <Avatar siglaName={perfilPessoa.sigla} cor="#328754" altura="80px" largura="80px"></Avatar>


            { /* Nome da pessoa */ }
            <div style={{marginTop: '17px', color: 'rgba(0, 0, 0, 0.65)', fontSize: '20px', fontWeight: '600', lineHeight: '24px'}}>
                { perfilPessoa.nome }
            </div>

            { /*  Cargo  */ }
            <div style={{marginTop: '16px', color: 'rgba(0, 0, 0, 0.65)', fontSize: '20px', lineHeight: '24px'}}>
                { perfilPessoa.cargo }
            </div>

            { /*  Descrição  */ }
            <div style={{fontSize: '16px', color: 'rgba(0, 0, 0, 0.65)', lineHeight: '20px', textAlign: 'center', marginTop: '3px'}}>
                { perfilPessoa.descricao }
            </div>


            {/*  Botão para Contratar uma Pessoa  */}
            { checkHired(hired) }

            {/*  Botão para combinar preço  */}
            <button style={{marginTop: '12px', border: 'none', backgroundColor: 'transparent', color: 'rgba(0, 0, 0, 0.65)'}}>
                Preço a combinar!
            </button>
        
        </div>
    )
}

export default CardPerfil;