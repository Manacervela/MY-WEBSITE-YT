
import styled from 'styled-components';

export const ContactContainer = styled.div` 
background: pink;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    height: 900px;
}

@media screen and (max-width: 480px) {
    height: 800px;

`;

export const ContactContent = styled.div`
  z-index: 1;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  

  @media screen and (max-width: 1000px){
    max-width: 80%;
 }

 @media screen and (max-width: 768px){
    max-width: 90%;
 }
 
 `;


export const ContactHeading = styled.h2`

color: #fff;
font-size: 36px;
line-height: 1.1;
font-weight: 600;
margin: auto;
padding-top: 30px;
text-align: center;

@media screen and (max-width: 768px) {
  font-size: 28px; 
}
`;

export const ContactParagraph = styled.p`
  margin-top: 20px;
  font-size: 20px;
  justify-content: center;
  line-height: 1.1;
  font-weight: 400;
  color: #fff;
  text-align: center;
  

  @media screen and (max-width: 768px) {
    font-size: 16px; 
  }
`;

export const ContactWrapper = styled.div`

  background: '#f9f9f9';
  max-width: 100%; 
  margin: 20px auto;
  padding: 20px; 
  border-radius: 10px; 
  text-align: center; 
  margin-bottom: 20px;

@media screen and (max-width: 768px) {
  height: 90%;
  margin-top: 10px;
}

`

export const ContactRow = styled.div`
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%; 

`;

export const ContactColumn = styled.div`
  flex: 1;
  margin: 0 26px;
 
`;

export const ContactForm = styled.form`
max-width: 600px;
margin-top: 20px; 

@media screen and (max-width: 768px) {
  margin-top: 10px; 
}

@media screen and (max-width: 480px) {
  margin-top: 10px; 
}
`;

export const ContactLabel = styled.label`
  color: #fff;
  margin: 10px 0;
  display: block;
  font-size: 20px;
`;


export const ContactInput = styled.input`
  width: 50vw; 
  margin-bottom: 10px; 
  padding: 20px;
  font-size: 12px; 
  
  @media screen and (max-width: 480px) {
    font-size: 10px; 
  }

`;
export const ContactTextarea = styled.textarea`
  
  width: 50vw;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 16px; 
  
  @media screen and (max-width: 480px) {
    font-size: 14px; 
  }
`;

export const SelectContainer = styled.div`
  position: relative;
`;

export const SubmitButton = styled.button`
 
  display: block;
  margin: 0 auto; 
  margin-top: 10px;
  padding: 10px 20px; 
  background-color: #605e5e; 
  color: #fff; 
  border: none; 
  cursor: pointer; 
  font-size: 16px; 
  border-radius: 5px;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #a980a0;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

