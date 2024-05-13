import React from 'react';
import imagen from '../../images/Background.png';
import { HeroContainer, HeroBg, ImagenBg,} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImagenBg src={imagen} type='images/png'/>
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection;
