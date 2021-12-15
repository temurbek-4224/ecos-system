import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./littleComponents/customButton.component";
import CustomInput from "./littleComponents/input.component";
import Title from "./littleComponents/title.component";
const newInputValues = {
  lastNum: '',
  zararliComponent: '',
  rek: '',
  q1: '',
  q2: '',
  v: '',
  firstLastNum: '',
  H: '',
  L: '',
  S: '',
  LS: '',
  Cf: ''
}

const NinethLab = () => {
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
      <Title>To'qqizinchi Amaliy ishi</Title>

      <form onSubmit={handleSubmit}>
        <div>
          <section>
            <CustomInput
              type='text'
              label='Talaba tartib raqaming oxirgi raqami'
              name='lastNum'
              value={inputValues.lastNum}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Zararli Komponent'
              name='zararliComponent'
              value={inputValues.zararliComponent}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='REK, mg/l'
              name='rek'
              value={inputValues.rek}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Q1, m/c'
              name='q1'
              value={inputValues.q1}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='Q2, m/c'
              name='q2'
              value={inputValues.q2}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='V, m/c'
              name='v'
              value={inputValues.v}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Talaba tartib raqamining oxiridan oldingi raqami'
              name='firstLastNum'
              value={inputValues.firstLastNum}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='H, m'
              name='H'
              value={inputValues.H}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='L, m'
              name='L'
              value={inputValues.L}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='S, mg/l'
              name='S'
              value={inputValues.S}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='LS, m'
              name='LS'
              value={inputValues.LS}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Cf, mg/l'
              name='Cf'
              value={inputValues.Cf}
              handleChange={handleChange}
            />
          </section>
        </div>

        <CustomButton type='submit'>Yechim</CustomButton>
      </form>

      <TableContainer>
        <LargeTable>
          <table className='table table-dark table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Talaba Ohirgi raqami</th>
                <th scope='col'>Zararli Component</th>
                <th scope='col'>REK, mg/l</th>
                <th scope='col'>Q1, m/c</th>
                <th scope='col'>Q2, m/c</th>
                <th scope='col'>V, m/c</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.lastNum}</td>
                <td>{inputValues.zararliComponent}</td>
                <td>{inputValues.rek}</td>
                <td>{inputValues.q1}</td>
                <td>{inputValues.q2}</td>
                <td>{inputValues.v}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-dark table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Talaba ohiridan oldingi raqami</th>
                <th scope='col'>H, m</th>
                <th scope='col'>L, m</th>
                <th scope='col'>S, mg/l</th>
                <th scope='col'>LS, m</th>
                <th scope='col'>Cf, mg/l</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.firstLastNum}</td>
                <td>{inputValues.H}</td>
                <td>{inputValues.L}</td>
                <td>{inputValues.S}</td>
                <td>{inputValues.LS}</td>
                <td>{inputValues.Cf}</td>
              </tr>
            </tbody>
          </table>
        </LargeTable>
        <SmallTable>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Talaba ohirgi raqami</th>
                <th scope='col'>Zararli Component</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.lastNum}</td>
                <td>{inputValues.zararliComponent}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col'>REK, mg/l</th>
                <th scope='col'>Q1, m/c</th>
                <th scope='col'>Q2, m/c</th>
                <th scope='col'>V, m/c</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.rek}</td>
                <td>{inputValues.q1}</td>
                <td>{inputValues.q2}</td>
                <td>{inputValues.v}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Talaba ohiridan oldingi raqami</th>
                <th scope='col'>H, m</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.firstLastNum}</td>
                <td>{inputValues.H}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col'>L, m</th>
                <th scope='col'>S, mg/l</th>
                <th scope='col'>LS, m</th>
                <th scope='col'>Cf, mg/l</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.L}</td>
                <td>{inputValues.S}</td>
                <td>{inputValues.LS}</td>
                <td>{inputValues.Cf}</td>
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

export default NinethLab;