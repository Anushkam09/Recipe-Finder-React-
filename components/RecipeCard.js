
import React from 'react';
import './RecipeCard.css'; 

const RecipeCard = ({ image, title, description, link }) => (
    <div className="recipe-card">
        <a href={link} style={{ textDecoration: 'none' }}>
            <img src={image} alt={title} />
            <div className="recipe-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </a>
    </div>
);

export default RecipeCard;




