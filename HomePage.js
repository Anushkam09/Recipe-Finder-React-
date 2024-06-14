import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import RecipeList from './components/RecipeList';
import AlfredoPasta from './components/AlfredoPasta';
import './App.css';

function HomePage() {
    return (

            <div className="App">
                <Header />
                <Banner />
                <header class = "section-header">
                    <h2> Our favorite recipes</h2>
                </header>
                <RecipeList />
                <Footer />
            </div>
    );
}

export default HomePage;
