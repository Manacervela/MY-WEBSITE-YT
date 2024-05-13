import styled from 'styled-components';

export const InfoContainer = styled.div` 
color: #fff;
background: '#f9f9f9';
margin-top: 0;
height: 700px;
justify-content: center;
align-items: center;
padding: 0;


@media screen and (max-width: 768px) {
    height: 1100px;
    
}

@media screen and (max-width: 480px) {
    height: 1300px;
    display: grid;

@media screen and (max-width: 280px) {
        height: auto; 
        margin-bottom: 450px; 
      }    
`;


export const InfoWrapper = styled.div` 
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1000px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;

@media screen and (max-width: 480px) {
    max-width: 100%;
    height: -200px;
    margin-right: 0;
  }
`
export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` :  `'col1 col2'`)};

@media screen and (max-width: 768px) { 
grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` :  `'col1 col1' 'col2 col2'`)}
}
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
 `

 export const Column2 = styled.div`
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col2;
  `

  export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 60px;
  `
  export const TopLine = styled.p`
   color: #808080;
   font-size: 16px;
   line-height: 16px;
   font-weight: 700;
   letter-spacing: 1.4px;
   text-transform: uppercase;
   margin-bottom: 16px;
  `
  export const Heading = styled.h1`
  color: #000;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #c7a2c2;
}; 

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`
export const Subtittle = styled.p`
max-width: 440px;
margin-bottom: 0;
font-size: 18px;
line-height: 24px;
color: #cb96cb; 
`;


export const ImgWrap = styled.div` 

max-width: 350px;
height: 100%;
`
export const Img = styled.img`
width: 100%;
height: 400px;
margin: 0 0 20px 0;
padding-right: 0;
border-radius: 50%;

@media screen and (max-width: 480px) {
    height: 300px;
   
     `

