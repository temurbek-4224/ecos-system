import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './littleComponents/title.component';
import CustomInput from './littleComponents/input.component';
import CustomButton from './littleComponents/customButton.component';
const newInputValues = {
  nameBekat: '',
  sh: '',
  shSh: '',
  Shq: '',
  jShq: '',
  j: '',
  L0: '',
  jG: '',
  g: '',
  shG: ''
};

const resultValues = {
  sh: undefined,
  shSh: undefined,
  Shq: undefined,
  jShq: undefined,
  j: undefined,
  jG: undefined,
  g: undefined,
  shG: undefined
}

const SeventhLab = () => {
  const [inputValues, setInputValues] = useState(newInputValues);
  const [resultSXM, setResultSXM] = useState(resultValues);

  const parseF = () => {
    const inputDatas = {};
    const sorted = Object.keys(inputValues).filter(value => value !== 'nameBekat')
    for (let key of sorted) {
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

  const handleSubmit = e => {
    e.preventDefault();
    parseF();
    const result = {}
    const getResult = (p, l) => {
      let L = (p / 12.5) * l;
      return L;
    }

    for (let key in resultValues) {
      let p = inputValues[key];
      result[key] = getResult(p, inputValues.L0);
    }

    setResultSXM(result);
    // setInputValues(newInputValues);
  }

  return (
    <Container>
      <Title>Yettinchi amaliy ish</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <section>
            <CustomInput
              type='text'
              label='Bekat nomi'
              value={inputValues.nameBekat}
              name='nameBekat'
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Sh'
              value={inputValues.sh}
              name='sh'
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='ShShq'
              value={inputValues.shSh}
              name='shSh'
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='Shq'
              value={inputValues.Shq}
              name='Shq'
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='JShq'
              value={inputValues.jShq}
              name='jShq'
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='J'
              value={inputValues.j}
              name='j'
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label={<span>L<sub>0</sub></span>}
              value={inputValues.L0}
              name='L0'
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label="JG'"
              value={inputValues.jG}
              name='jG'
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label="G'"
              value={inputValues.g}
              name='g'
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label="ShG'"
              value={inputValues.shG}
              name='shG'
              handleChange={handleChange}
            />
          </section>
        </div>
        <CustomButton type='submit'>Yechim</CustomButton>
      </form>

      <Title>Amaliyot Yechimi</Title>

      <TableContainer>
        <LargeTable>
          <table className='table table-bordered table-dark'>
            <thead>
              <tr>
                <th rowSpan='2' scope='col'>Bekat nomi</th>
                <th colSpan='8' scope='col'>Shamol Yo'nalishining takrorlanishi, %</th>
              </tr>
              <tr>
                <th scope='col'>Sh</th>
                <th scope='col'>ShShq</th>
                <th scope='col'>Shq</th>
                <th scope='col'>JShq</th>
                <th scope='col'>J</th>
                <th scope='col'>L<sub>0</sub></th>
                <th scope='col'>JG'</th>
                <th scope='col'>G'</th>
                <th scope='col'>ShG'</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  Object.keys(inputValues).map((key, index) => {
                    return (
                      <td key={index}>{inputValues[key]}</td>
                    )
                  })
                }
              </tr>
            </tbody>
          </table>
        </LargeTable>
        <SmallTable>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Bekat nomi</th>
                <th scope='col'>Sh</th>
                <th scope='col'>ShShq</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.nameBekat}</td>
                <td>{inputValues.sh}</td>
                <td>{inputValues.shSh}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Shq</th>
                <th scope='col'>JShq</th>
                <th scope='col'>J</th>
                <th scope='col'>L<sub>0</sub></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.Shq}</td>
                <td>{inputValues.jShq}</td>
                <td>{inputValues.j}</td>
                <td>{inputValues.L0}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-danger table-bordered'>
            <thead>
              <tr>
                <th>JG'</th>
                <th>G'</th>
                <th>ShG'</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.jG}</td>
                <td>{inputValues.g}</td>
                <td>{inputValues.shG}</td>
              </tr>
            </tbody>
          </table>
        </SmallTable>
      </TableContainer>

      <ResultContainer>
        <h1>Javob</h1>
        <LargeTable>
          <table className='table table-dark table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Jo'g'rofik ta'riflar</th>
                {
                  Object.keys(resultSXM).map(key => (
                    <th scope='col' key={key}>{key}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SXM ning uzunligi</td>
                {
                  Object.keys(resultSXM).map(key => (
                    <td key={key}>{resultSXM[key]}</td>
                  ))
                }
              </tr>
            </tbody>
          </table>
        </LargeTable>
        <SmallTable>
          <table className='table table-bordered table-success'>
            <thead>
              <tr>
                <th>Jo'g'rofik Ta'riflar</th>
                <th>Sh</th>
                <th>ShShq</th>
                <th>Shq</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SXM uzunligi</td>
                <td>{resultSXM.sh}</td>
                <td>{resultSXM.shSh}</td>
                <td>{resultSXM.Shq}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-success table-bordered'>
            <thead>
              <tr>
                <th scope='col'>JShq</th>
                <th scope='col'>J</th>
                <th scope='col'>JG'</th>
                <th scope='col'>G'</th>
                <th scope='col'>ShG'</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  Object.keys(resultSXM).filter((value, index) => index > 2).map(value => <td key={value}>{resultSXM[value]}</td>)
                }
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

export default SeventhLab;