import React from 'react';
import {
  RecipesContainer,
  RecipesH1,
  RecipesH2,
  RecipesWrapper,
  RecipesCard,
  RecipesImg,
  RecipeButton,
} from './RecipesElements';
import Image from '../../images/Brownie.jpg';
import Image3 from '../../images/cinamon.jpg';
import Image4 from '../../images/donuts2.jpg';
import { Link } from 'react-router-dom';

const RecipesSection = () => {
  return (
    <RecipesContainer id="Recipes">
      <RecipesH1>Our Recipes</RecipesH1>
      <RecipesWrapper>
        <RecipesCard>
          <RecipesImg src={Image} alt="Brownie" />
          <RecipesH2>Brownies</RecipesH2>
         
          <Link to="/RecipesSection/BrownieRecipe">
            <div>
            <RecipeButton>Click</RecipeButton>
          </div>
          </Link>
        
        </RecipesCard>
        <RecipesCard>
          <RecipesImg src={Image3} alt="cinamon" />
          <RecipesH2>Cinnamon Rolls</RecipesH2>
          <Link to="/RecipesSection/CinnamonRollsRecipe">
           <div>
            <RecipeButton>Click</RecipeButton>
          </div>
          </Link>
        </RecipesCard>
        <RecipesCard>
          <RecipesImg src={Image4} alt="donuts" />
          <RecipesH2>Glazed Donuts</RecipesH2>
          <Link to="/RecipesSection/DonutsRecipe">
            <div>
            <RecipeButton>Click</RecipeButton>
          </div>
          </Link>
          
        </RecipesCard>
      </RecipesWrapper>
    </RecipesContainer>
  );
};

export default RecipesSection;
