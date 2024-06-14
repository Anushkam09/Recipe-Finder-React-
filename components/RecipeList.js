import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

const RecipeList = () => (
    <div className="recipe-list">
        <RecipeCard
            image="https://www.allrecipes.com/thmb/UdRDzff-6EaN6UwBA52avi_aE-4=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/19402-quick-and-easy-alfredo-sauce-DDMFS-4x3-17abb2055c714807944172db9172b045.jpg"
            title="Alfredo Pasta"
            description="A creamy delight made with fettuccine, butter, and Parmesan cheese. Indulgent and comforting, it's the ultimate comfort food classic."
            link="alfredopasta"
        />
        <RecipeCard
            image="https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-640.webp"
            title="Succhi (Tibetan Momos)"
            description="A delicious dumpling dish from Tibet, traditionally filled with a savory meat mixture. These steamed delights are perfect as a snack or appetizer."
            link="momos"
        />
        <RecipeCard
            image="https://aplantifulpath.com/wp-content/uploads/2019/08/Strawberry-Ice-Cream-1.jpg"
            title="Ice Cream"
            description="A refreshing and delicious treat, perfect for a hot summer day. This recipe is a basic template that you can customize with your favorite flavors and ingredients."
            link="icecream"
        />
    </div>
);
export default RecipeList;
