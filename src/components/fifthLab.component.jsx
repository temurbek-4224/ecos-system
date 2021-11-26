import React from "react";
import styled from "styled-components";
import Title from "./littleComponents/title.component";
const FifthLab = () => {
  return (
    <div>
      <Container>
        <Title>Uchinchi amaliy ish</Title>
        <h1>😇Bu amaliy mashg'ulat nazariy topshiriqlardan iborat.😇</h1>
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

  form{
    display: flex;
    padding: 20px 40px;
    width: 100%;
    text-align: center;
    align-items: center;
    flex-direction: column;
    div{
      width: 80%;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 720px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      section{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`
export default FifthLab;