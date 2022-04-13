import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./littleComponents/customButton.component";
import CustomInput from "./littleComponents/input.component";
import Title from "./littleComponents/title.component";

const newInputValues = {
  nameModda: '',
  chrek: '',
  translokatsion: '',
  suvda: '',
  havoda: '',
  allSanitar: '',
}

const TenLab = () => {
  const [inputValues, setInputValues] = useState(newInputValues);

  const parseF = () => {
    const inputDatas = {};
    const values = Object.keys(inputValues).filter(name => name !== 'nameModda');
    for (let key of values) {
      inputDatas[key] = parseFloat(inputValues[key]);
    }
  }

  const solving = () => {
    const { chrek } = inputValues;

    console.log(chrek * 2);
    console.log('yechim yechaman!');
  }

  const handleChange = e => {
    const { name, value } = e.target;
    const values = { ...inputValues };
    values[name] = value;

    setInputValues(values);
  }

  const handleSubmit = e => {
    e.preventDefault();
    parseF();

    console.log('submitted')
    solving();
  }

  return (
    <Container>
      <Title>O'ninchi Amaliy mashg'ulotlar</Title>

      <form onSubmit={handleSubmit}>
        <div>
          <section>
            <CustomInput
              type='text'
              label='Modda'
              name='nameModda'
              value={inputValues.nameModda}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='ChREK mg/kg'
              name='chrek'
              value={inputValues.chrek}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='translokatsion'
              name='translokatsion'
              value={inputValues.translokatsion}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Suvda'
              name='suvda'
              value={inputValues.suvda}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='havoda'
              name='havoda'
              value={inputValues.havoda}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Umumiy Sanitar'
              name='allSanitar'
              value={inputValues.allSanitar}
              handleChange={handleChange}
            />
          </section>
        </div>
        <CustomButton type='submit'>Yechim</CustomButton>
      </form>

      <TableContainer>
        <LargeTable>
          <table className="table table-dark table-bordered">
            <thead>
              <tr>
                <th scope="col">Modda</th>
                <th scope="col">ChREK (mg/kg)</th>
                <th scope="col">translokatsion</th>
                <th scope="col">Suvda</th>
                <th scope="col">Havoda</th>
                <th scope="col">Umumiy Sanitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.keys(inputValues).map(key => <td key={key}>{inputValues[key]}</td>)}
              </tr>
            </tbody>
          </table>
        </LargeTable>
        <SmallTable></SmallTable>
      </TableContainer>

      <ResultContainer>
        <h1>Javob</h1>
      </ResultContainer>

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

const TableContainer = styled.div`
  padding: 10px 150px;
  text-align: center;
  @media screen and (max-width: 720px){
    padding: 10px 5px;
  }
`

const LargeTable = styled.div`
   @media screen and (max-width: 720px){
    display: none;
  }
`

const SmallTable = styled.div`
  display: none;
  text-align: center;
  width: 100%;
  padding: 10px 20px;

  table{
    font-size: 14px;
    max-width: 100%;
  }

  @media screen and (max-width: 720px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const ResultContainer = styled.div`
  padding: 10px 20px;
  text-align: center;
  font-size: 14px;
  h1{
    @media screen and (max-width: 720px){
      font-size: 20px;
    }
  }


  @media screen and (max-width: 720px){
    font-size: 14px;
  }
`

export default TenLab;