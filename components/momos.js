import React from 'react';
import './RecipePage.css';
import Header from './Header';
import Footer from './Footer';

const Momos = () => {
    return (
        <>
        <Header />
        <main>
            <section className="recipe-hero">
                    <img src="https://mediavine-res.cloudinary.com/image/upload/s--8di2l6gs--/ar_1:1,c_fill,f_auto,fl_lossy,q_auto/v1544487685/hnztcbzoncrpaokkfap7.jpg" alt="Delicious Momos" className="recipe-image" />
                <div className="recipe-info">
                    <h1>Succhi: Authentic Tibetan Momos</h1>
                    <p>These momos are a perfect blend of succulent filling wrapped in a soft dough, ideal for a flavorful meal.</p>
                    <ul>
                        <li><span>Prep Time:</span> 1 hour</li>
                        <li><span>Cook Time:</span> 20 minutes</li>
                        <li><span>Total Time:</span> 1 hour 20 minutes</li>
                        <li><span>Servings:</span> 4-6</li>
                        <li><span>Difficulty:</span> Medium</li>
                    </ul>
                </div>
            </section>
            <section className="recipe-ingredients">
                <h2>Ingredients</h2>
                <ul>
                    <li>2 cups all-purpose flour</li>
                    <li>1/2 teaspoon salt</li>
                    <li>Water (as needed)</li>
                    <li>1/2 pound ground chicken or vegetables</li>
                    <li>1 small onion, finely chopped</li>
                    <li>2 cloves garlic, minced</li>
                    <li>1 teaspoon ginger, minced</li>
                    <li>2 tablespoons soy sauce</li>
                    <li>1 tablespoon sesame oil</li>
                    <li>Salt and pepper to taste</li>
                </ul>
            </section>
            <section className="recipe-instructions">
                <h2>Instructions</h2>
                <ol>
                    <li>Mix the flour and salt in a large bowl. Gradually add water and knead into a smooth dough. Let it rest for 30 minutes.</li>
                    <li>In a pan over medium heat, sauté onions, garlic, and ginger until fragrant. Add the ground chicken or vegetables and cook until fully done.</li>
                    <li>Stir in soy sauce, sesame oil, salt, and pepper. Cook for an additional 2-3 minutes. Let the filling cool.</li>
                    <li>Roll out the dough into small circles. Place a small amount of filling in the center of each dough circle.</li>
                    <li>Fold the dough over the filling and pinch the edges to seal. Repeat with remaining dough and filling.</li>
                    <li>Steam the momos in a steamer basket for 15-20 minutes, or until the dough is cooked through.</li>
                    <li>Serve hot with a dipping sauce of your choice, such as a spicy tomato chutney or a garlic soy sauce.</li>
                    <li>Enjoy your delicious homemade momos with a side of pickled vegetables or a light salad.</li>
                </ol>
            </section>
            </main>
            <Footer />
            </>
    );
}

export default Momos;