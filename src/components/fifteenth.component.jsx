import React from "react";
import styled from "styled-components";
import Title from "./littleComponents/title.component";

const FifteenthLab = () => {
  return (
    <Container>
      <Title>O'n beshinchi amaliy ish</Title>
      <h1>ðBu amaliy mashg'ulat nazariy topshiriqlardan iborat.ð</h1>
      <h2 style={{
        marginTop: '20px',
        fontSize: '48px',
        textAlign: 'center'
      }}>ð§ð§ð§</h2>
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
  color: #fff;
  h1{
    text-align: center;
    @media screen and (max-width: 720px){
      font-size: 18px;
    }
  }
`
export default FifteenthLab;