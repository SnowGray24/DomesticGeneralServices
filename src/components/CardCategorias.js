import React from 'react';
import CardsCategorias from '../data/CardsCategorias';
import '../css/categoriesCards.css';

function CardCategorias () {
    return (
        <div>
            {CardsCategorias.map((item, index)=>(
                <div key={index} className="categoryCard">
                    <img src={item.image} alt={item.title} />
                    <p className="titleCard">{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default CardCategorias;