import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import './Search.css';

const recipes = [
    {
        image: "https://www.allrecipes.com/thmb/UdRDzff-6EaN6UwBA52avi_aE-4=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/19402-quick-and-easy-alfredo-sauce-DDMFS-4x3-17abb2055c714807944172db9172b045.jpg",
        title: "Alfredo Pasta",
        description: "A creamy delight made with fettuccine, butter, and Parmesan cheese. Indulgent and comforting, it's the ultimate comfort food classic.",
        link: "alfredopasta"
    },
    {
        image: "https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-640.webp",
        title: "Succhi (Tibetan Momos)",
        description: "A delicious dumpling dish from Tibet, traditionally filled with a savory meat mixture. These steamed delights are perfect as a snack or appetizer.",
        link: "momos"
    },
    {
        image: "https://aplantifulpath.com/wp-content/uploads/2019/08/Strawberry-Ice-Cream-1.jpg",
        title: "Ice Cream",
        description: "A refreshing and delicious treat, perfect for a hot summer day. This recipe is a basic template that you can customize with your favorite flavors and ingredients.",
        link: "icecream"
    },
    {
        image: "https://c.ndtvimg.com/2022-10/n25obec8_rabri_625x300_20_October_22.jpg",
        title: "Coconut Rabri",
        description: "A creamy dessert made with coconut and milk.",
        link: "https://food.ndtv.com/recipe-coconut-rabri-958465"
    },
    {
        image: "https://c.ndtvimg.com/2023-12/efrl2jm8_chicken-curry_625x300_24_December_23.jpg",
        title: "Gongura Chicken Curry",
        description: "A spicy and tangy chicken curry with Gongura leaves.",
        link: "https://food.ndtv.com/recipe-gongura-chicken-curry-958462"
    },
    {
        image: "https://c.ndtvimg.com/2023-09/uj2b6ndo_chole_625x300_05_September_23.jpg",
        title: "Chickpeas Tikka Masala",
        description: "A vegetarian version of tikka masala made with chickpeas.",
        link: "https://food.ndtv.com/recipe-chickpeas-tikka-masala-958453"
    },
    {
        image: "https://c.ndtvimg.com/2023-11/rt2d5vdg_beetroot-halwa_625x300_10_November_23.jpg",
        title: "Beetroot Halwa",
        description: "A sweet Indian dessert made with beetroot.",
        link: "https://food.ndtv.com/recipe-beetroot-halwa-958414"
    },
    {
        image: "https://c.ndtvimg.com/2023-11/r4n6brao_kalakand_625x300_07_November_23.jpg",
        title: "Kalakand",
        description: "A delicious Indian sweet made with milk and sugar.",
        link: "https://food.ndtv.com/recipe-kalakand-958410"
    },
    {
        image: "https://c.ndtvimg.com/2019-10/fp9ul3rg_lachha-paratha_625x300_23_October_19.jpg",
        title: "Achaari Lachha Paratha",
        description: "Layered Indian flatbread with pickle spices.",
        link: "https://food.ndtv.com/recipe-achaari-lachha-paratha-958386"
    },
    {
        image: "https://c.ndtvimg.com/2023-10/2k8dvs6g_bhapa-doi-_625x300_20_October_23.jpg",
        title: "Bhapa Doi",
        description: "A steamed yogurt dessert from Bengal.",
        link: "https://food.ndtv.com/recipe-bhapa-doi-958400"
    },
    {
        image: "https://www.allrecipes.com/thmb/jOI__XuTtI-bG8I9Ap5QYoeWP44=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3512373-pasta-salad-Rick-Whittles-f392323ba4e94b25b3a217fabceb8017.jpeg",
        title: "Pasta Salad",
        description: "Refreshing pasta salad with vegetables.",
        link: "https://www.allrecipes.com/recipe/14385/pasta-salad/"
    }
];

const AllRecipes = () => {
    const [searchInput, setSearchInput] = useState('');

    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <>
            <Header />
            <Search searchInput={searchInput} setSearchInput={setSearchInput} />
            <div className="recipe-list">
                {filteredRecipes.map((recipe, index) => (
                    <RecipeCard
                        key={index}
                        image={recipe.image}
                        title={recipe.title}
                        description={recipe.description}
                        link={recipe.link}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default AllRecipes;
