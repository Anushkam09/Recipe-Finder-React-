import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlfredoPasta from './components/AlfredoPasta';
import './App.css';
import HomePage from './HomePage';
import IceCreamRecipe from './components/icecream';
import Momos from './components/momos';
import AllRecipes from './components/AllRecipe';
import FeedbackForm from './components/FeedbackForm';


function App() {
  return (
   
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/alfredopasta" element={<AlfredoPasta />} />
          <Route path="/icecream" element={<IceCreamRecipe />} />
          <Route path="/momos" element={<Momos />} />
          <Route path="/allrecipes" element={<AllRecipes />} />
          <Route path="/index" element={<HomePage />} />
          <Route path="/FeedbackForm" element={<FeedbackForm />} />  

        </Routes>
      </div>
    </Router>
  );
}

export default App;
