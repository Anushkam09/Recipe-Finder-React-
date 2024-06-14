import React from 'react';
import './RecipePage.css';
import Header from './Header';
import Footer from './Footer';

const AlfredoPasta = () => {
    return (
        <>
        <Header />
        <main>
            <section className="recipe-hero">
                <img src="https://www.allrecipes.com/thmb/UdRDzff-6EaN6UwBA52avi_aE-4=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/19402-quick-and-easy-alfredo-sauce-DDMFS-4x3-17abb2055c714807944172db9172b045.jpg" alt="Delicious Pasta" className="recipe-image" />
                <div className="recipe-info">
                    <h1>The Cheesiest Alfredo Pasta</h1>
                    <p>This pasta recipe is a perfect blend of rich flavors and textures, making it an ideal choice for a delightful meal.</p>
                    <ul>
                        <li><span>Prep Time:</span> 20 minutes</li>
                        <li><span>Cook Time:</span> 10 minutes</li>
                        <li><span>Total Time:</span> 30 minutes</li>
                        <li><span>Servings:</span> 6-8</li>
                        <li><span>Difficulty:</span> Medium</li>
                    </ul>
                </div>
            </section>
            <section className="recipe-ingredients">
                <h2>Ingredients</h2>
                <ul>
                    <li>1 pound (450g) fettuccine or your preferred pasta</li>
                    <li>Salt (for pasta water)</li>
                    <li>1 cup heavy cream</li>
                    <li>1/2 cup unsalted butter</li>
                    <li>1 cup freshly grated Parmesan cheese</li>
                    <li>Salt and black pepper to taste</li>
                </ul>
            </section>
            <section className="recipe-instructions">
                <h2>Instructions</h2>
                <ol>
                    <li>Cook 12 ounces of fettuccine in a large pot of salted boiling water until al dente.</li>
                    <li>A large pan over medium heat, melt 1/2 cup (1 stick) of unsalted butter.</li>
                    <li>Add 1 cup of heavy cream to the melted butter and bring to a simmer.</li>
                    <li>Cook the mixture for about 5 minutes, stirring occasionally, until it thickens slightly.</li>
                    <li>In 1 cup of freshly grated Parmesan cheese and 1/2 teaspoon of freshly ground black pepper until the cheese melts and the sauce is smooth.</li>
                    <li>The fettuccine and add it to the pan with the Alfredo sauce</li>
                    <li>The pasta to coat it evenly with the sauce.</li>
                    <li>Serve the pasta hot, garnished with additional Parmesan cheese and chopped fresh parsley if desired.</li>
                    <li>Enjoy your rich and creamy Alfredo pasta with a side of garlic bread or a simple green salad.</li>
                </ol>
            </section>
            </main>
            <Footer />
            </>
    );
}

export default AlfredoPasta;
