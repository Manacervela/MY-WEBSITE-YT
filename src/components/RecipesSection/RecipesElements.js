import styled from "styled-components";

export const RecipesContainer = styled.div`
background: 'white';
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0;
margin-top: 10px;

@media screen and (max-width: 768px) {
    height: 1100px;
    margin-top: 0;
}

@media screen and (max-width: 480px) {
    height: 1300px;
    margin-top: 10%;

`;

export const RecipesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center; 
  grid-gap: 16px; 
  padding: 0 50px;
  margin: 0 0 40px 0;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 20px;
  }

  @media screen and (max-width: 480px) {
   grid-template-columns: 1fr;
  }
`;

export const RecipesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 20px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  margin: 10px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const RecipesImg = styled.img`
  height: 180px;
  width: 160px;
  margin-radius: 10px;
  
`;

export const RecipesH1 = styled.h1`
  font-size: 2.5rem;
  color: grey;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const RecipesH2 = styled.h2`
  color: pink;
  font-size: 1rem;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const RecipeButton = styled.button`
  background: pink; 
  color: white; 
  border: none; 
  padding: 10px 20px; 
  border-radius: 5px; 
  cursor: pointer;
  margin-top: 10px; 
`;
