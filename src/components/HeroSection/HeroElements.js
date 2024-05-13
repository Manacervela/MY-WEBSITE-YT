import styled from 'styled-components';


export const HeroContainer = styled.div`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
height: 930px;
position: relative;
z-index: 1;
width: auto;
overflow: hidden;


@media screen and (max-width: 768px) {
    height: 1100px;
}

@media screen and (max-width: 480px) {
    height: 930px;
`;


export const HeroBg = styled.div` 
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 930px;
overflow: hidden;
`;

export const ImagenBg = styled.img`
width: 100%;
height: 100%;
-object-fit: cover;
object-fit: cover;
background: #fff;

@media screen and (max-width: 768px) {
    height: 1100px;
    width: 100%;
}

@media screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
`;





