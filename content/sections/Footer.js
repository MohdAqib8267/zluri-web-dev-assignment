import React from 'react';
import styled from 'styled-components';
import Wave from '../../content/images/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Linkdin from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -7rem;
  overflow-x: hidden;
`;

const WaveImage = styled.img`
width: 100%;
filter: brightness(0%) contrast(100%) saturate(0%) grayscale(100%);
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;
  gap: 4rem;
  color: white;
  z-index: 1000;
  position: absolute;
  @media screen and (max-width: 480px) {
    transform: scale(0.5);
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <WaveImage  src={Wave} alt="" />
      <ContentWrapper>
        <span style={{fontFamily:"Lexend Medium"}}>mohdaqib921@gmail.com</span>
        <IconsWrapper>
          <a target="_blank" href="https://www.instagram.com/mohdazeem8267/" target="_blank" rel="noopener noreferrer">
            <Insta color="white" size="3rem" />
          </a>
          <a target="_blank" href='https://www.linkedin.com/in/mohd-aqib-4052b6225/'>

            <Linkdin color="white" size="3rem" />
          </a>
          
          <a target="_blank" href="https://github.com/MohdAqib8267" target="_blank" rel="noopener noreferrer">
            <Github color="white" size="3rem" />
          </a>
        </IconsWrapper>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;