import React from 'react';
import CardsCategorias from '../data/CardsCategorias';
import '../css/categoriesCards.css';
import { Link } from 'react-router-dom';

function CardCategorias () {
    return (
        <div className="Container">
            <h3>Encontre Serviços por Categoria</h3>
            <div className="CategoryCardsContainer">
                {CardsCategorias.map((item, index)=>(
                <Link className="Link-card" to="/">
                    <div key={index} className="categoryCard">
                        <img src={item.image} alt={item.title} />
                        <p className="titleCard">{item.title}</p>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    )
}

export default CardCategorias;