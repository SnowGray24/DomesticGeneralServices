import React from 'react';
import ServicosMecanicos from "../data/ServicosMecanicos";
import '../css/cardContainer.css';

function CardPrestador() {
    return (
        <div>
            {ServicosMecanicos.map((item, index)=>(
                <div key={index} className="CardContainer">
                    <p>{item.imagem}</p>
                    <h3 className="NomePrestador">{item.nome}</h3>
                    <p className="DescPrestador">{item.descrição}</p>
                </div>
            ))}
        </div>
    )
}
export default CardPrestador;