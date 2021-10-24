import React from "react";
import styled from "styled-components";
import SecondLab from "../components/secondLab.component";

const Solution = ({ match }) => {
  return (
    <Container>
      <Title>Ekalogiya Labaratoriyalar {match.params.username}</Title>
      <SecondLab match={match} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(
    134.34% 134.34% at 50% 0%,
    #1f3757 0%,
    #131537 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  color: #fff;
`

const Title = styled.h1`
  @media screen and (max-width: 720px) {
    font-size: 20px;
    text-align: center;
  }
`

export default Solution;