import React, { useState } from 'react';
import styled from 'styled-components';
import CustomButton from './littleComponents/customButton.component';
import CustomInput from './littleComponents/input.component';
import Title from './littleComponents/title.component';


const SixthLab = () => {

  const [inputValues, setInputValues] = useState({
    lastNumDoc: '',
    mCO: '',
    mNO2: '',
    mSO2: '',
    mChang: '',
    lastNum: '',
    N: '',
    H: '',
    D: '',
    W: '',
    Tr: '',
    Ta: '',
    A: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const values = { ...inputValues };
    values[name] = value;
    // console.log(value)
    // console.log()
    // console.log(e.target.value)
    setInputValues(values);
  }

  const parseF = () => {
    const inputDatas = {};
    for (let key in inputValues) {
      inputDatas[key] = parseFloat(inputValues[key])
    }

    setInputValues(inputDatas);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    parseF();


  }

  return (
    <Container>
      <Title>Oltinchi Amaliyot</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <section>
            <CustomInput
              type='text'
              label='Guvohnoma ohiridan oldingi raqam'
              name='lastNumDoc'
              value={inputValues.lastNumDoc}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label={<p>M<sub>CO</sub></p>}
              name='mCO'
              value={inputValues.mCO}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label={<p>M<sub>NO2</sub></p>}
              name='mNO2'
              value={inputValues.mNO2}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label={<p>M<sub>SO2</sub></p>}
              name='mSO2'
              value={inputValues.mSO2}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label={<p>M<sub>chang</sub></p>}
              name='mChang'
              value={inputValues.mChang}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Guvohnoma ohirgi raqami'
              name='lastNum'
              value={inputValues.lastNum}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='N'
              name='N'
              value={inputValues.N}
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
              label='D, m'
              name='D'
              value={inputValues.D}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='W, m/c'
              name='W'
              value={inputValues.W}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label={<p>T<sub>r</sub>, <sup>0</sup>C</p>}
              name='Tr'
              value={inputValues.Tr}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label={<p>T<sub>a</sub>,<sup>0</sup>C</p>}
              name='Ta'
              value={inputValues.Ta}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='A'
              name='A'
              value={inputValues.A}
              handleChange={handleChange}
            />
          </section>
        </div>
        <CustomButton type='submit'>Yechim</CustomButton>
      </form>

      <TableContainer>
        <LargeTable>

        </LargeTable>
        <SmallTable>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col' colSpan='2'>Talabalik Guvohnomasining</th>
              </tr>
              <tr>
                <th scope='col'>Ohiridan oldingi raqami.</th>
                <th scope='col'>Ohirigi raqami</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.lastNumDoc}</td>
                <td>{inputValues.lastNum}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col' colSpan='4'>Tashlamalar Miqdori ()</th>
              </tr>
              <tr>
                <th scope='col'>M<sub>CO</sub></th>
                <th scope='col'>M<sub>NO2</sub></th>
                <th scope='col'>M<sub>SO2</sub></th>
                <th scope='col'>M<sub>chang</sub></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.mCO}</td>
                <td>{inputValues.mNO2}</td>
                <td>{inputValues.mSO2}</td>
                <td>{inputValues.mChang}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col'>N</th>
                <th scope='col'>H, m</th>
                <th scope='col'>D, m</th>
                <th scope='col'>A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.N}</td>
                <td>{inputValues.H}</td>
                <td>{inputValues.D}</td>
                <td>{inputValues.A}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col'>W, m/s</th>
                <th scope='col'>T<sub>r</sub>, <sup>0</sup>C</th>
                <th scope='col'>T<sub>a</sub>, <sup>0</sup>C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.W}</td>
                <td>{inputValues.Tr}</td>
                <td>{inputValues.Ta}</td>
              </tr>
            </tbody>
          </table>
        </SmallTable>
      </TableContainer>
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

`

const LargeTable = styled.div`
  
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


export default SixthLab;