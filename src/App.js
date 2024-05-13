import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { StyleSheetManager } from 'styled-components'; 
import Home from './pages';
import BrownieRecipe from './components/RecipesSection/BrownieRecipe'; 
import DonutsRecipe from './components/RecipesSection/DonutsRecipe';
import CinnamonRollsRecipe from './components/RecipesSection/CinnamonRollsRecipe';

function App() {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => !['isOpen'].includes(prop)}>
      <Router>
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/RecipesSection/BrownieRecipe" element={<BrownieRecipe />} /> 
          <Route path="/RecipesSection/DonutsRecipe" element={<DonutsRecipe />} />
          <Route path="/RecipesSection/CinnamonRollsRecipe" element={<CinnamonRollsRecipe />} />
        </Routes>
      </Router>
    </StyleSheetManager>
  );
}

export default App;
