import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return (
    <TitleContainer>
      {children}
    </TitleContainer>
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