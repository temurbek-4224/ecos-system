import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Title = ({ children }) => {
  return (
    <Fade left big>
      <TitleContainer>
        {children}
      </TitleContainer>
    </Fade>

  )
}

const TitleContainer = styled.h1`
  text-align: center;
  color: #fff;
  padding: 10px 0px;
  @media screen and (max-width: 720px) {
    font-size: 20px;
  }
`

export default Title;