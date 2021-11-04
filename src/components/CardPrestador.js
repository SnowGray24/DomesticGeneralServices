import React from 'react';
import ServicosMecanicos from "../data/AnunciosServicosMecanicos";
import '../css/cardPrestador.css';
import { Link } from 'react-router-dom';

function CardPrestador() {
    return (
        <div className="CardsContainer">
            {ServicosMecanicos.map((item, index)=>(
                <Link key={index} className="CardContent" to={item.route}>
                    <img src={item.imagem} alt={item.nome} className="PerfilPrestador"/>
                    <h3 className="NomePrestador">{item.nome}</h3>
                    <p className="DescPrestador">{item.descrição}</p>
                </Link>
            ))}
        </div>
    )
}
export default CardPrestador;