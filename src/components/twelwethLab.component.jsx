import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./littleComponents/customButton.component";
import CustomInput from "./littleComponents/input.component";
import Title from "./littleComponents/title.component";
const newInputValues = {
  lastNumber: '',
  zonaA: '',
  tutunHajmi: '',
  quvurlarSoni: '',
  quvurlarH: '',
  quvurlarD: '',
  fonKonsent: '',
  mKoefit: '',
  tashModda: '',
  firstNumber: '',
  W: '',
  N: '',
  kF: ''
}

const newResult = {
  vM: '',
  chrem1: '',
  chrem2: '',
  chrem3: '',
  chrem4: '',
  v1: '',
  cMT1: '',
  cMT2: '',
  cMT3: '',
  cMT4: '',
}

const TwelvethLab = () => {
  const [inputValues, setInputValues] = useState(newInputValues);
  const [result, setResult] = useState(newResult);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const values = { ...inputValues };
    values[name] = value;
    setInputValues(values);
  }

  const parseF = () => {
    const inputDatas = {};
    const values = Object.keys(inputValues).filter((a, i) => a !== 'tashModda');
    for (let key of values) {
      inputDatas[key] = parseFloat(inputValues[key]);
    }
  }

  const solving = () => {
    const { W, quvurlarD, N, fonKonsent, quvurlarH, zonaA, kF, mKoefit, tutunHajmi } = inputValues;
    const vM = 1.3 * quvurlarD * W / N;
    const chrem1 = (1.5 - fonKonsent) * quvurlarH ** 2 / (zonaA * kF * mKoefit * N);
    const chrem2 = (0.06 - fonKonsent) * quvurlarH ** 2 / (zonaA * kF * mKoefit * N);
    const chrem3 = (0.5 - fonKonsent) * quvurlarH ** 2 / (zonaA * kF * mKoefit * N);
    const chrem4 = (0.05 - fonKonsent) * quvurlarH ** 2 / (zonaA * kF * mKoefit * N);

    ////////////////

    const v1 = 3.14 * quvurlarD ** 2 / 4 * W * N;
    const cMT1 = chrem1 / tutunHajmi;
    const cMT2 = chrem2 / tutunHajmi;
    const cMT3 = chrem3 / tutunHajmi;
    const cMT4 = chrem4 / tutunHajmi;

    setResult({ vM, chrem1, chrem2, chrem3, chrem4, v1, cMT1, cMT2, cMT3, cMT4 });
  }

  const handleSubmit = e => {
    e.preventDefault();
    parseF();
    solving();
    setInputValues(newInputValues);
  }

  return (
    <Container>
      <Title>O'n Ikkinchi Amaliy mashg'ulotlar</Title>

      <form onSubmit={handleSubmit}>
        <div>
          <section>
            <CustomInput
              type='text'
              label='Ohirgi raqam'
              name='lastNumber'
              value={inputValues.lastNumber}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Iqlim zonasi, A'
              name='zonaA'
              value={inputValues.zonaA}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Tutun gazlar hajmi, Q'
              name='tutunHajmi'
              value={inputValues.tutunHajmi}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Quvurlar soni, N'
              name='quvurlarSoni'
              value={inputValues.quvurlarSoni}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='Quvurning balandligi'
              name='quvurlarH'
              value={inputValues.quvurlarH}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Quvurning diametri'
              name='quvurlarD'
              value={inputValues.quvurlarD}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Fon konsentratsiyasi'
              name='fonKonsent'
              value={inputValues.fonKonsent}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='m koefitsent'
              name='mKoefit'
              value={inputValues.mKoefit}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='tashlanadigan modda'
              name='tashModda'
              value={inputValues.tashModda}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='Guvohnoma ohiridan oldingi raqami'
              name='firstNumber'
              value={inputValues.firstNumber}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label={<p>W, mg/m<sup>3</sup></p>}
              name='W'
              value={inputValues.W}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='N, %'
              name='N'
              value={inputValues.N}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label={<p>k, mg/m<sup>3</sup></p>}
              name='kF'
              value={inputValues.kF}
              handleChange={handleChange}
            />
          </section>
        </div>
        <CustomButton type='submit'>Yechim</CustomButton>
      </form>

      <TableContainer>
        <LargeTable>
          <table className='table table-bordered table-dark'>
            <thead>
              <tr>
                <th scope='col'>Number</th>
                <th scope='col'>Iqlim Zonasi, A</th>
                <th scope='col'>Tutun gazlar Hajmi,Q m<sup>3</sup>/soat</th>
                <th scope='col'>Quvurlar soni, N dona</th>
                <th scope='col'>Quvurlar balandligi, H m</th>
                <th scope='col'>Quvurlar diametri</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  Object.keys(inputValues).filter((value, index) => index < 6).map((key, index) => <td key={index}>{inputValues[key]}</td>)
                }
              </tr>
            </tbody>
          </table>
          <table className='table table-bordered table-dark'>
            <thead>
              <tr>
                <th scope='col'>Fon Konsentratsiyasi</th>
                <th scope='col'>m Koefitsent</th>
                <th scope='col'>Tashlanadigan Moddalar</th>
                <th scope='col'>Ohiridan oldingi raqami</th>
                <th scope='col'>W, mg/m<sup>3</sup></th>
                <th scope='col'>N, %</th>
                <th scope='col'>k, mg/m<sup>3</sup></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  Object.keys(inputValues).filter((key, index) => index >= 6).map((value, index) => <td key={index}>{inputValues[value]}</td>)
                }
              </tr>
            </tbody>
          </table>
        </LargeTable>
        <SmallTable>
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>Number</th>
                <th scope='col'>Iqlim Zonasi, A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.lastNumber}</td>
                <td>{inputValues.zonaA}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>Tutun gazlar Hajmi,Q m<sup>3</sup>/soat</th>
                <th scope='col'>Quvurlar soni, N dona</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.tutunHajmi}</td>
                <td>{inputValues.quvurlarSoni}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>Quvurlar balandligi, H m</th>
                <th scope='col'>Quvurlar diametri</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.quvurlarH}</td>
                <td>{inputValues.quvurlarD}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>Fon Konsentratsiyasi</th>
                <th scope='col'>m Koefitsent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.fonKonsent}</td>
                <td>{inputValues.mKoefit}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>Tashlanadigan Moddalar</th>
                <th scope='col'>Ohiridan oldingi raqami</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.tashModda}</td>
                <td>{inputValues.firstNumber}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>W, mg/m<sup>3</sup></th>
                <th scope='col'>N, %</th>
                <th scope='col'>k, mg/m<sup>3</sup></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.W}</td>
                <td>{inputValues.N}</td>
                <td>{inputValues.kF}</td>
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
                <th>V <sub>m</sub></th>
                <th>1-ChREM</th>
                <th>2-ChREM</th>
                <th>3-ChREM</th>
                <th>4-ChREM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{result.vM}</td>
                <td>{result.chrem1}</td>
                <td>{result.chrem2}</td>
                <td>{result.chrem3}</td>
                <td>{result.chrem4}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-dark table-bordered">
            <thead>
              <tr>
                <th scope="col">V <sub>i</sub></th>
                <th scope="col">C <sub>MT1</sub></th>
                <th scope="col">C <sub>MT2</sub></th>
                <th scope="col">C <sub>MT3</sub></th>
                <th scope="col">C <sub>MT4</sub></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{result.v1}</td>
                <td>{result.cMT1}</td>
                <td>{result.cMT2}</td>
                <td>{result.cMT3}</td>
                <td>{result.cMT4}</td>
              </tr>
            </tbody>
          </table>
        </LargeTable>
        <SmallTable>
          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">V <sub>m</sub></th>
                <th scope="col">1-Chrem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{result.vM}</td>
                <td>{result.chrem1}</td>
              </tr>
            </tbody>
          </table>

          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">2-Chrem</th>
                <th scope="col">3-Chrem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{result.chrem2}</td>
                <td>{result.chrem3}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">4-Chrem</th>
                <th scope="col">V <sub>i</sub></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{result.chrem4}</td>
                <td>{result.v1}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">C <sub>MT1</sub></th>
                <th scope="col">C <sub>MT2</sub></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{result.cMT1}</td>
                <td>{result.cMT2}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-danger table-bordered">
            <thead>
              <tr>
                <th scope="col">C <sub>MT3</sub></th>
                <th scope="col">C <sub>MT4</sub></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{result.cMT3}</td>
                <td>{result.cMT4}</td>
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

export default TwelvethLab;