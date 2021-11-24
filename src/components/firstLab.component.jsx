import React, { useState } from "react";
import styled from 'styled-components';
import CustomButton from "./littleComponents/customButton.component";
import CustomInput from "./littleComponents/input.component";
import Title from "./littleComponents/title.component";

const values = {
  number: '',
  massa: '',
  tempreture: '',
  pBosim: '',
  k: '',
  f1: '',
  f2: '',
  l: '',
  n: '',
  h: ''
}

const FirstLab = (props) => {
  const [inputValues, setInputValues] = useState(values);

  const parseF = () => {
    const inputDatas = {};
    for (let key in inputValues) {
      inputDatas[key] = parseFloat(inputValues[key])
    }

    setInputValues(inputDatas);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const values = { ...inputValues };
    values[name] = value;
    setInputValues(values);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    parseF();

    setInputValues(values);

    console.log('Submitted');
  }

  return (
    <Container>
      <Title>Birinchi Amaliy ish</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <section>
            <CustomInput
              type='text'
              label='Number'
              name='number'
              value={inputValues.number}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Massa'
              name='massa'
              value={inputValues.massa}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Temprature'
              name='tempreture'
              value={inputValues.tempreture}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Bosim mm.hg'
              name='pBosim'
              value={inputValues.pBosim}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='K'
              name='k'
              value={inputValues.k}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='f1'
              name='f1'
              value={inputValues.f1}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='f2'
              name='f2'
              value={inputValues.f2}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='l, m'
              name='l'
              value={inputValues.l}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='n, m'
              name='n'
              value={inputValues.n}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='h, m'
              name='h'
              value={inputValues.h}
              handleChange={handleChange}
            />
          </section>
        </div>
        <CustomButton type='submit'>Yechim</CustomButton>
      </form>
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

export default FirstLab;