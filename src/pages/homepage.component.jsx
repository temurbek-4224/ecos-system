import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import autmn from '../assets/autmn.jpg';
import winter from '../assets/winter.jpg';
import spring from '../assets/spring.jpg';
import summer from '../assets/summer.jpg';

const newDate = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentmonth = newDate.getMonth();

const getImage = m => {
  if (m >= 2 && m <= 4) {
    return spring;
  } else if (m >= 5 && m <= 7) {
    return summer;
  } else if (m >= 8 && m <= 10) {
    return autmn;
  }

  return winter;
}


const HomePage = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }


  return (
    <div style={{
      position: 'relative'
    }}>
      <BgImage>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <input type='text' maxLength='15' placeholder='Enter Your Name' value={inputValue} onChange={handleChange}></input>
            <Link to={`/${inputValue}`}>
              <button type='submit'>View Solution</button>
            </Link>
            <a href='https://t.me/ekos4224'>
              <img src="https://img.icons8.com/fluency/48/000000/telegram-app.png" alt='' />
            </a>
            <h2 style={{ color: 'white' }}>{inputValue}</h2>
          </form>
        </FormContainer>
        <DateContainer>
          <h1>{months[newDate.getMonth()]}🤓</h1>
        </DateContainer>
      </BgImage>
    </div>
  )
}

const BgImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${getImage(currentmonth)});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`

const FormContainer = styled.div`
  width: 350px;
  height: 400px;
  margin: 0 auto;
  padding: 30px 25px;
  @media screen and (max-width: 720px) {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  form{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    /* padding: 30px 25px; */
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    input{
      padding: 10px 16px;
      font-size: 20px;
      outline: none;
      color: red;
      background-color: #A6F65F;
      border: none;
      border-radius: 25px;
      @media screen and (max-width: 720px) {
        font-size: 12px;
        padding: 6px 10px;
      }
    }
    button{
      outline: none;
      cursor: pointer;
      padding: 10px 24px;
      font-size: 16px;
      font-weight: bold;
      background-color: rgba(228, 67, 35,0.8);
      margin: 20px 0px;
      border-radius: 25px;
      border: none;
      color: rgba(255,255,255,0.7);
      &:hover{
        transform: scale(1.2);
        background-color: rgba(228, 67, 35,1);
        color: rgba(255,255,255,1);
        transition: all 0.2s;
      }
      @media screen and (max-width: 720px) {
        font-size: 12px;
        padding: 6px 10px;
      }
    }
  }
`

const DateContainer = styled.div`
  width: 300px;
  padding: 15px 25px;
  border-radius: 20px;
  background-color: rgba(0,0,0,0.6);
  position: absolute;
  bottom: 15px;
  right: 15px;
  color: #fff;
  &:hover{
     box-shadow: 0px 0px 25px 10px #f9fc5dd2;
     transition: all 0.2s ease-in-out; 
  }
  @media screen and (max-width: 720px){
    padding: 8px 12px;
    border-radius: 10px;
    width: 150px;
    h1{
      font-size: 20px;
      text-align: center;
    }
    &:hover{
     box-shadow: 0px 0px 15px 8px #f9fc5dd2;
     transition: all 0.2s ease-in-out;
    }
  }
`

export default HomePage;