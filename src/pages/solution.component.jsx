import React from "react";
import styled from "styled-components";
import Content from "../components/littleComponents/content.component";
import DATA from "../data/data";

const Solution = ({ match }) => {
  const data = DATA;
  return (
    <Container>
      <Title>Ekalogiya Amaliyotlar {match.params.username}</Title>
      <EkosContainer>
        {
          data.map((item, index) => (
            <Content
              key={index}
              imageUrl={item.imageUrl}
              id={item.id}
              name={item.name}
              pdf={item.pdf}
            />
          ))
        }
      </EkosContainer>
      {/* <SecondLab match={match} /> */}
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

const EkosContainer = styled.div`
 display: flex;
 justify-content: space-around;
 flex-wrap: wrap;
`

export default Solution;