import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./littleComponents/customButton.component";
import CustomInput from "./littleComponents/input.component";
import Title from "./littleComponents/title.component";

const newInputValues = {
  nameModda1: '',
  chrek1: '',
  nameModda2: '',
  chrek2: '',
  nameModda3: '',
  chrek3: '',
  s: ''
}

const TenLab = () => {
  const [inputValues, setInputValues] = useState(newInputValues);
  const [result, setResult] = useState({
    k1: '',
    k2: '',
    k3: '',
    result1: '',
  });

  const parseF = () => {
    const inputDatas = {};
    const values = Object.keys(inputValues).filter((a, i) => a !== `nameModda${i}`);
    for (let key of values) {
      inputDatas[key] = parseFloat(inputValues[key]);
    }
  }

  const solving = () => {
    const { chrek1, chrek2, chrek3, s } = inputValues;
    const k1 = s / chrek1;
    const k2 = s / chrek2;
    const k3 = s / chrek3;
    const cF1 = 0.3 * chrek1;
    const cF2 = 0.4 * chrek2;
    const cF3 = 0.5 * chrek3;

    const result1 = s * (1 / cF1 + 1 / cF2 + 1 / cF3);
    setResult({ k1, k2, k3, result1 });
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
    setInputValues(newInputValues)
  }

  return (
    <Container>
      <Title>O'ninchi Amaliy mashg'ulotlar</Title>

      <form onSubmit={handleSubmit}>
        <div>
          <section>
            <CustomInput
              type='text'
              label='1-Modda'
              name='nameModda1'
              value={inputValues.nameModda1}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='1-ChREK'
              name='chrek1'
              value={inputValues.chrek1}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='2-modda'
              name='nameModda2'
              value={inputValues.nameModda2}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='2-ChREK'
              name='chrek2'
              value={inputValues.chrek2}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='S (mg/kg)'
              name='s'
              value={inputValues.s}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='3-modda'
              name='nameModda3'
              value={inputValues.nameModda3}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='3-ChREK'
              name='chrek3'
              value={inputValues.chrek3}
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
                <th scope="col">1-modda</th>
                <th scope="col">1-ChREK</th>
                <th scope="col">2-modda</th>
                <th scope="col">2-ChREK</th>
                <th scope="col">3-modda</th>
                <th scope="col">3-ChREK</th>
                <th scope="col">S (mg/kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.keys(inputValues).map(key => <td key={key}>{inputValues[key]}</td>)}
              </tr>
            </tbody>
          </table>
        </LargeTable>
        <SmallTable>
          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">1-modda</th>
                <th scope="col">1-ChREK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.nameModda1}</td>
                <td>{inputValues.chrek1}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">2-modda</th>
                <th scope="col">2-ChREK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.nameModda2}</td>
                <td>{inputValues.chrek2}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">3-modda</th>
                <th scope="col">3-ChREK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.nameModda3}</td>
                <td>{inputValues.chrek3}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">S (mg/kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.s}</td>
              </tr>
            </tbody>
          </table>
        </SmallTable>
      </TableContainer>

      <ResultContainer>
        <h1>Javob</h1>
        <LargeTable>
          <table className="table table-dark table-bordered">
            <thead>
              <tr>
                <th scope="col" key={12}>k1</th>
                <th scope="col" key={13}>k2</th>
                <th scope="col" key={14}>k3</th>
                <th scope="col" key={15}>Z</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  Object.keys(result).map(item => <td key={item}>{result[item]}</td>
                  )
                }
              </tr>
            </tbody>
          </table>
        </LargeTable>
        <SmallTable>
          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">k1</th>
                <th scope="col">k2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{result.k1}</td>
                <td>{result.k2}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">k3</th>
                <th scope="col">Z</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{result.k3}</td>
                <td>{result.result1}</td>
              </tr>
            </tbody>
          </table>
        </SmallTable>
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
  padding: 10px 150px;
  text-align: center;
  font-size: 14px;
  h1{
    @media screen and (max-width: 720px){
      font-size: 20px;
    }
  }


  @media screen and (max-width: 720px){
    font-size: 14px;
    padding:10px 0px;
  }
`

export default TenLab;