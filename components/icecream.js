import React from 'react';
import './RecipePage.css';
import Header from './Header';
import Footer from './Footer';

const IceCreamRecipe = () => {
    return (
        <>
            <Header />
        <main>
            <section className="recipe-hero">
                    <img src="https://aplantifulpath.com/wp-content/uploads/2019/08/Strawberry-Ice-Cream-1.jpg" alt="Delicious Ice Cream" className="recipe-image" />
                <div className="recipe-info">
                    <h1>Homemade Vanilla Ice Cream</h1>
                    <p>This vanilla ice cream recipe is creamy, rich, and easy to make. Perfect for a sweet treat on a warm day!</p>
                    <ul>
                        <li><span>Prep Time:</span> 15 minutes</li>
                        <li><span>Chill Time:</span> 4 hours</li>
                        <li><span>Total Time:</span> 4 hours 15 minutes</li>
                        <li><span>Servings:</span> 8</li>
                        <li><span>Difficulty:</span> Easy</li>
                    </ul>
                </div>
            </section>
            <section className="recipe-ingredients">
                <h2>Ingredients</h2>
                <ul>
                    <li>2 cups heavy cream</li>
                    <li>1 cup whole milk</li>
                    <li>3/4 cup granulated sugar</li>
                    <li>1 tablespoon pure vanilla extract</li>
                    <li>Pinch of salt</li>
                </ul>
            </section>
            <section className="recipe-instructions">
                <h2>Instructions</h2>
                <ol>
                    <li>In a medium bowl, whisk together the heavy cream, whole milk, granulated sugar, vanilla extract, and salt until the sugar is completely dissolved.</li>
                    <li>Pour the mixture into an ice cream maker and churn according to the manufacturer’s instructions, usually for about 20-25 minutes, or until it reaches a soft-serve consistency.</li>
                    <li>Transfer the churned ice cream to an airtight container and freeze for at least 4 hours or until firm.</li>
                    <li>Serve the ice cream scooped into bowls or cones, and enjoy!</li>
                    <li>Optionally, add toppings like chocolate chips, caramel sauce, or fresh fruit before serving.</li>
                </ol>
            </section>
            </main>
           <Footer /> 
        </>
    );
}

export default IceCreamRecipe;