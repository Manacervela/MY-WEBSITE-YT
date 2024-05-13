import React, { useRef } from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtittle,
  ImgWrap,
  Img,
} from './InfoElements';

import { homeObjOne } from './Data';

const InfoSection = ({ imgStart }) => {
  const infoSectionRef = useRef(null);

  return (
    <>
      <InfoContainer ref={infoSectionRef} id="About us">
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{homeObjOne.topLine}</TopLine>
                <Heading>{homeObjOne.headline}</Heading>
                <Subtittle>{homeObjOne.description}</Subtittle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={homeObjOne.img} alt={homeObjOne.alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
