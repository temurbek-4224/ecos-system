import React, { useState } from "react";
import styled from "styled-components";
import CustomInput from "./littleComponents/input.component";
import Title from "./littleComponents/title.component";
import CustomButton from './littleComponents/customButton.component';
const newInputValues = {
  number: '',
  tr: '',
  k1: '',
  e: '',
  ye: '',
  l: '',
  v: '',
  k3: '',
  k4: ''
}

const ThirteenthLab = () => {
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
      <Title>O'n Uchinchi Amaliy mashg'ulotlar</Title>

      <form onSubmit={handleSubmit}>
        <div>
          <section>
            <CustomInput
              type='text'
              label='Talaba tartib raqami'
              name='number'
              value={inputValues.number}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Tr, ga'
              name='tr'
              value={inputValues.tr}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='K1'
              name='k1'
              value={inputValues.k1}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label={<p>E m<sup>3</sup>/sut</p>}
              name='e'
              value={inputValues.e}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='L, %'
              name='l'
              value={inputValues.l}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label={<p>Ye m<sup>3</sup>/sut</p>}
              name='ye'
              value={inputValues.ye}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='V, km'
              name='v'
              value={inputValues.v}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='K3'
              name='k3'
              value={inputValues.k3}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='K4'
              name='k4'
              value={inputValues.k4}
              handleChange={handleChange}
            />
          </section>
        </div>

        <CustomButton type='button'>Yechim</CustomButton>
      </form>

      <TableContainer>
        <LargeTable>
          <table className='table table-bordered table-dark'>
            <thead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>Tr, ga</th>
                <th scope='col'>K1</th>
                <th scope='col'>E, m<sup>3</sup>/sut</th>
                <th scope='col'>Ye,<sup>3</sup>/sut</th>
                <th scope='col'>L, %</th>
                <th scope='col'>V, km</th>
                <th scope='col'>K3</th>
                <th scope='col'>K4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.keys(inputValues).map((value, index) => {
                  return (
                    <td key={index}>{inputValues[value]}</td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </LargeTable>
        <SmallTable>
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>Tartib Raqam</th>
                <th scope='col'>Tr, ga</th>
                <th scope='col'>K1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.number}</td>
                <td>{inputValues.tr}</td>
                <td>{inputValues.k1}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col'>E, m<sup>3</sup>/sut</th>
                <th scope='col'>Ye,<sup>3</sup>/sut</th>
                <th scope='col'>L, %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.e}</td>
                <td>{inputValues.ye}</td>
                <td>{inputValues.l}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col'>V, km</th>
                <th scope='col'>K3</th>
                <th scope='col'>K4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.v}</td>
                <td>{inputValues.k3}</td>
                <td>{inputValues.k4}</td>
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

export default ThirteenthLab;