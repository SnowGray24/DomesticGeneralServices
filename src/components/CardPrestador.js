import React from 'react';
import ServicosMecanicos from "../data/ServicosMecanicos";
import '../css/cardPrestador.css';

function CardPrestador() {
    return (
        <div className="CardsContainer">
            {ServicosMecanicos.map((item, index)=>(
                <div key={index} className="CardContent">
                    <img src={item.imagem} alt={item.nome} className="PerfilPrestador"/>
                    <h3 className="NomePrestador">{item.nome}</h3>
                    <p className="DescPrestador">{item.descrição}</p>
                </div>
            ))}
        </div>
    )
}
export default CardPrestador;