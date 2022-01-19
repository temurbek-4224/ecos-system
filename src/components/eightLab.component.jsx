import React, { useState } from 'react';
import styled from 'styled-components';
import CustomButton from './littleComponents/customButton.component';
import CustomInput from './littleComponents/input.component';
import Title from './littleComponents/title.component';


const EightLab = () => {

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

  const [RETs, setRETs] = useState({
    CO: undefined,
    NO2: undefined,
    SO2: undefined,
    chang: undefined
  });

  const [result, setResult] = useState('');



  const importatntValues = [
    { name: 'CO', rem: 5, cf: 1.5 },
    { name: 'SO2', rem: 0.5, cf: 0.1 },
    { name: 'NO2', rem: 0.085, cf: 0.03 },
    { name: 'chang', rem: 0.2, cf: 0.2 },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;
    const values = { ...inputValues };
    values[name] = value;
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
    const { W, D, H, Tr, Ta, A, mCO, mSO2, mNO2, mChang } = inputValues;
    const f = ((10 ** 3) * (W ** 2) * D) / ((H ** 2) * (Tr - Ta));
    console.log('f', f);
    const m = 1 / (0.67 + 0.1 * Math.sqrt(f) + 0.34 * Math.pow(f, 1 / 3));
    console.log('m', m)
    const v1 = 3.14 * (D ** 2) * W * 3 / 4;
    console.log('v1', v1)

    // Н қиймати (рухсат этилган
    // концентрацияси) қуйидаги формула орқали топилади:

    function findH(m, rem) {
      return A * m * f * D / Math.pow((8 * v1 * rem), 3 / 4)
    }

    // Бу ерда n- ўзгармас коэффициент n = 3

    function findRET(M, rem, cf) {
      let H = findH(M, rem);
      console.log('hisoblangan H: ', H);

      const ret = (rem - cf) * H ** 2 * Math.pow(v1 * (Tr - Ta), 1 / 3) / A * f * 3 * m;

      console.log('ret funksiyadagisi: ', ret)

      return ret;
    }

    const rets = { ...RETs };

    rets.CO = findRET(mCO, importatntValues[0].rem, importatntValues[0].cf);
    rets.SO2 = findRET(mSO2, importatntValues[1].rem, importatntValues[1].cf);
    rets.NO2 = findRET(mNO2, importatntValues[2].rem, importatntValues[2].cf);
    rets.chang = findRET(mChang, importatntValues[3].rem, importatntValues[3].cf);

    setRETs(rets);

    function findResult(ret, rem) {
      console.log('ret: ', ret)
      console.log('rem: ', rem)
      return (ret / rem) <= 3;
    }

    if (findResult(rets.CO, importatntValues[0].rem) || findResult(rets.SO2, importatntValues[1].rem) || findResult(rets.NO2, importatntValues[2].rem) || findResult(rets.chang, importatntValues[3].rem)) {
      setResult("Bu joydan Ishlab chiqaruvchi Korxonani Faoliyatini yo'lga qo'ysa bo'ladi! 😃😎")
    } else {
      setResult("Bu joydan Ishlab chiqaruvchi korxonani Faoliyatini yo'lga qo'yib bo'lmaydi. 😫😥");
    }

    const newInputValues = {
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
    }

    setInputValues(newInputValues);
  }

  return (
    <Container>
      <Title>Sakkizinchi Amaliyot</Title>
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

      <Title>Amaliyot Yechimi</Title>
      <TableContainer>
        <LargeTable>
          <table className='table table-dark table-bordered'>
            <thead>
              <tr>
                <th colSpan='2' scope='col'>Talabalik Guvohnomasining</th>
                <th colSpan='4' scope='col'>Tashlamalar miqdori g/s</th>
              </tr>
              <tr>
                <th scope='col'>Ohiridan oldingi raqami.</th>
                <th scope='col'>Ohirigi raqami</th>
                <th scope='col'>M<sub>CO</sub></th>
                <th scope='col'>M<sub>NO2</sub></th>
                <th scope='col'>M<sub>SO2</sub></th>
                <th scope='col'>M<sub>chang</sub></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.lastNumDoc}</td>
                <td>{inputValues.lastNum}</td>
                <td>{inputValues.mCO}</td>
                <td>{inputValues.mNO2}</td>
                <td>{inputValues.mSO2}</td>
                <td>{inputValues.mChang}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-dark table-bordered'>
            <thead>
              <tr>
                <th scope='col'>N</th>
                <th scope='col'>H, m</th>
                <th scope='col'>D, m</th>
                <th scope='col'>W, m/s</th>
                <th scope='col'>T<sub>r</sub>, <sup>0</sup>C</th>
                <th scope='col'>T<sub>a</sub>, <sup>0</sup>C</th>
                <th scope='col'>A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.N}</td>
                <td>{inputValues.H}</td>
                <td>{inputValues.D}</td>
                <td>{inputValues.W}</td>
                <td>{inputValues.Tr}</td>
                <td>{inputValues.Ta}</td>
                <td>{inputValues.A}</td>
              </tr>
            </tbody>
          </table>
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

      <ResultContainer>
        <h1>Javob</h1>
        {
          result ? (importatntValues.map((value, index) => {
            return (
              <div key={index}>
                <p style={{
                  fontSize: '16px'
                }}>
                  Ushbu {value.name} gazning ruxsat etilgan REM: {value.rem},
                  Masala davomida hisoblangan RET esa: <span style={{
                    color: 'red'
                  }}>{RETs[value.name]}</span>
                </p>
              </div>
            )
          })) : null
        }

        <h3>{result ? result : null}</h3>
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
    align-items: center;
    text-align: center;
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


export default EightLab;