import React from 'react';
import CardsCategorias from '../data/CardsCategorias';
import '../css/categoriesCards.css';

function CardCategorias () {
    return (
        <div className="Container">
            <h3>Encontre Serviços por Categoria</h3>
            <div className="CategoryCardsContainer">
                {CardsCategorias.map((item, index)=>(
                    <div key={index} className="categoryCard">
                        <img src={item.image} alt={item.title} />
                        <p className="titleCard">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardCategorias;