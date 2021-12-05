import React from "react";
import styled from "styled-components";
import Title from "./littleComponents/title.component";
const EightLab = () => {
  return (
    <div>
      <Container>
        <Title>Sakkizinchi Amaliy ishi</Title>
        <h1>😇Bu amaliy mashg'ulot 7-bilan bir xil. Yettinchi amaliy mashg'ulotga o'ting!😇</h1>
        <h2 style={{
          marginTop: '20px',
          fontSize: '48px',
          textAlign: 'center'
        }}>🧐🧐🧐</h2>
      </Container>
    </div>
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
  color: #fff;
  h1{
    text-align: center;
    @media screen and (max-width: 720px){
      font-size: 18px;
    }
  }
`
export default EightLab;