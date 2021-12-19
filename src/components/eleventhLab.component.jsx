import React, { useState } from "react";
import styled from "styled-components";
import Title from "./littleComponents/title.component";
import CustomInput from './littleComponents/input.component';
import CustomButton from "./littleComponents/customButton.component";
const newInputValues = {
  number: '',
  massaOfYoq: '',
  kulliligi: '',
  iflosModdaMassasi: '',
  oxidOfUglerod: '',
  oxidAzod: '',
  oxidQorgoshin: '',
  k1: '',
  k2: '',
}
const EleventhLab = () => {
  const [inputValues, setInputValues] = useState(newInputValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const values = { ...inputValues };
    values[name] = value;
    setInputValues(values);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setInputValues(newInputValues);
  }
  return (
    <Container>
      <Title>O'n Birinchi Amaliy mashg'ulotlar</Title>

      <form onSubmit={handleSubmit}>
        <div>
          <section>
            <CustomInput
              type='text'
              label='Variant nomeri'
              name='number'
              value={inputValues.number}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label="Yoqilgan massasi"
              name='massaOfYoq'
              value={inputValues.massaOfYoq}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label="Yoqilg'ining kulliligi"
              name='kulliligi'
              value={inputValues.kulliligi}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label="Iflos modda massasi"
              name='iflosModdaMassasi'
              value={inputValues.iflosModdaMassasi}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label="Uglerod oxidi"
              name='oxidOfUglerod'
              value={inputValues.oxidOfUglerod}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label="Azot oxidlari"
              name='oxidAzod'
              value={inputValues.oxidAzod}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label="Qo'rg'oshin oxidlari"
              name='oxidQorgoshin'
              value={inputValues.oxidQorgoshin}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label="k1 koefitsent"
              name='k1'
              value={inputValues.k1}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label="k2 koefitsent"
              name='k2'
              value={inputValues.k2}
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
                <th scope="col">Variant nomeri</th>
                <th scope="col">Yoqilgan massasi</th>
                <th scope="col">Kulliligi</th>
                <th scope="col">Iflos modda massasi</th>
                <th scope="col">Uglerod oxidi</th>
                <th scope="col">Azot oxidi</th>
                <th scope="col">Qo'rg'oshin oxidi</th>
                <th scope="col">k1</th>
                <th scope="col">k2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  Object.keys(inputValues).map((value, index) => {
                    return (
                      <td key={index}>{inputValues[value]}</td>
                    );
                  })
                }
              </tr>
            </tbody>
          </table>
        </LargeTable>
        <SmallTable>
          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">Variant nomeri</th>
                <th scope="col">Yoqilgan massasi</th>
                <th scope="col">Kulliligi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  Object.keys(inputValues).filter((value, index) => index < 3).map((value, index) => {
                    return (
                      <td key={index}>{inputValues[value]}</td>
                    )
                  })
                }
              </tr>
            </tbody>
          </table>
          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">Iflos modda massasi</th>
                <th scope="col">Uglerod oxidi</th>
                <th scope="col">Azot oxidi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  Object.keys(inputValues).filter((value, index) => index > 2 && index < 6).map((value, index) => {
                    return (
                      <td key={index}>{inputValues[value]}</td>
                    )
                  })
                }
              </tr>
            </tbody>
          </table>
          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">Qo'rg'oshin oxidi</th>
                <th scope="col">k1</th>
                <th scope="col">k2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  Object.keys(inputValues).filter((value, index) => index > 5 && index < 9).map((value, index) => {
                    return (
                      <td key={index}>{inputValues[value]}</td>
                    )
                  })
                }
              </tr>
            </tbody>
          </table>
        </SmallTable>
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

export default EleventhLab;