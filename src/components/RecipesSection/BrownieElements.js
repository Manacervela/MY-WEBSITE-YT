import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoToHomeLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: rgb(157, 151, 157);
  font-size: 24px;
  max-height: 90px;
  padding: 20px;
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  background: rgba(255, 255, 255, 0.7); 

  &:hover {
    color: #f38d9e;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    padding: 0.5rem;
  }
`;



export const PageContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  height: 100vh;
`;

export const ContentContainer = styled.div`
  padding: 30px;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
  text-align: center; 
  margin: 20px 0;
`;

export const RecetaContainer = styled.div`
  background-color: lightpink;
  padding: 10px;
  border-radius: 10px;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  content: center;
  height: 300px;
  box-sizing: border-box;
  position: relative;
`;

export const RecetaImagen = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: -90px auto;
`;

export const Containerh3 = styled.h3 `
color: white;
font-weight: 400px;
text-align: center;
 margin-top: 145px; 

 @media screen and (max-width: 280px) {
  font-size: 18px; 
  margin-top: 70px; 
}

 `;

export const ContainerP2 = styled.p`
color: white;
text-align: center;
margin-top: 30px; 
padding: 10px;
margin-bottom: 20px;
font-size: 14px;

@media screen and (max-width: 280px) {
  font-size: 14px; 
  margin-top: 20px; 
}
`;


export const ListContainer = styled.div`
  text-align: left; 
  margin-top: 20px; 
`;

export const ListItem = styled.li`
  list-style-type: disc; 
  margin-left: 50px;
  color: #808080;  
`;

export const OrderedListContainer = styled.div`
  text-align: left; 
  margin-top: 20px; 
  color: #808080;
`;

export const OrderedListItem = styled.li`
  list-style-type: decimal; 
  margin-left: 10px; 
  lineHeight: 1;
   `