import React, { useState } from "react";
import styled from 'styled-components';
import CustomButton from "./littleComponents/customButton.component";
import CustomInput from "./littleComponents/input.component";
import Title from './littleComponents/title.component';

const newInputValues = {
  number: '',
  pImpuls: '',
  tVaqt: '',
  nChastota: '',
  rMasofa: '',
  kKuchayish: ''
}
const FourthLab = () => {
  const [inputValues, setInputValues] = useState(newInputValues);

  const parseF = () => {
    const inputDatas = {};
    for (let key in inputValues) {
      inputDatas[key] = parseFloat(inputValues[key])
    }

    setInputValues(inputDatas);
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

    setInputValues(newInputValues);
    console.log('Submitted');
  }

  return (
    <Container>
      <Title>To'rtinchi amaliy ish</Title>

      {/* Form Component */}

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
              label='Nurlanish kuchi'
              name='pImpuls'
              value={inputValues.pImpuls}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='Impuls davomiyligi'
              name='tVaqt'
              value={inputValues.tVaqt}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Impuls chastotasi'
              name='nChastota'
              value={inputValues.nChastota}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='Manba bilan masofa'
              name='rMasofa'
              value={inputValues.rMasofa}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Kuchayish Koefitsenti'
              name='kKuchayish'
              value={inputValues.kKuchayish}
              handleChange={handleChange}
            />
          </section>
        </div>
        <CustomButton type='submit'>Yechim</CustomButton>
      </form>

      {/* Table Container */}

      <TableContainer>
        <SmallTable>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Number</th>
                <th scope='col'>Nurlanishning Impulsiv Kuchi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.number}</td>
                <td>{inputValues.pImpuls}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Chiqish vaqti</th>
                <th scope='col'>Takrorlanish chastotasi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.tVaqt}</td>
                <td>{inputValues.nChastota}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Manba orasidagi masofa</th>
                <th scope='col'>Kuchayish Koefitsent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.rMasofa}</td>
                <td>{inputValues.kKuchayish}</td>
              </tr>
            </tbody>
          </table>
        </SmallTable>
        <LargeTable>
          <table className='table table-dark table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Number</th>
                <th scope='col'>Nurlanishning Impulsiv Kuchi</th>
                <th scope='col'>Chiqish vaqti</th>
                <th scope='col'>Takrorlanish chastotasi</th>
                <th scope='col'>Manba orasidagi masofa</th>
                <th scope='col'>Kuchayish Koefitsent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  Object.keys(inputValues).map(key => {
                    return (
                      <td key={key}>{inputValues[key]}</td>
                    )
                  })
                }
              </tr>
            </tbody>
          </table>
        </LargeTable>
      </TableContainer>

      {/* Result Container */}
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
        justify-content: center;
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

export default FourthLab;