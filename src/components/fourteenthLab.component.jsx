import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./littleComponents/customButton.component";
import CustomInput from "./littleComponents/input.component";
import Title from "./littleComponents/title.component";
const newInputValues = {
  number: '',
  tiko: '',
  damas: '',
  neksiya: '',
  otayul: '',
  mersades: '',
  baz740: '',
  alfa: '',
  iqlimiyHudud: '',
  l: '',
  dk: ''
}

const FourteenthLab = () => {
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
      <Title>O'n To'rtinchi Amaliy mashg'ulotlar</Title>

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
              label='Tiko'
              name='tiko'
              value={inputValues.tiko}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Damas'
              name='damas'
              value={inputValues.damas}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='Neksiya'
              name='neksiya'
              value={inputValues.neksiya}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Mersedes'
              name='mersades'
              value={inputValues.mersades}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Bel BAZ740'
              name='baz740'
              value={inputValues.baz740}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='alfa'
              name='alfa'
              value={inputValues.alfa}
              handleChange={handleChange}
            />
          </section>
          <section>
            <CustomInput
              type='text'
              label='Iqlimiy Hudud'
              name='iqlimiyHudud'
              value={inputValues.iqlimiyHudud}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='L, km'
              name='l'
              value={inputValues.l}
              handleChange={handleChange}
            />
            <CustomInput
              type='text'
              label='Dk'
              name='dk'
              value={inputValues.dk}
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
                <th scope='col' rowSpan='2'>No</th>
                <th scope='col' colSpan='6'>Korxonalardagi avtomobillarning soni</th>
                <th scope='col' rowSpan='2'>Alfa</th>
                <th scope='col' rowSpan='2'>Iqlimiy Hudud</th>
                <th scope='col' rowSpan='2'>l, km</th>
                <th scope='col' rowSpan='2'>Dk</th>
              </tr>
              <tr>
                <th scope='col'>Tiko</th>
                <th scope='col'>Damas</th>
                <th scope='col'>Neksiya</th>
                <th scope='col'>Otayul</th>
                <th scope='col'>Mersedes</th>
                <th scope='col'>Bel RAZ740</th>
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
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>Tiko</th>
                <th scope='col'>Damas</th>
                <th scope='col'>Neksiya</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.number}</td>
                <td>{inputValues.tiko}</td>
                <td>{inputValues.damas}</td>
                <td>{inputValues.neksiya}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>Otayul</th>
                <th scope='col'>Mersedes</th>
                <th scope='col'>BelBAZ-740</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.otayul}</td>
                <td>{inputValues.mersades}</td>
                <td>{inputValues.baz740}</td>
                {/* <td>{inputValues.alfa}</td> */}
              </tr>
            </tbody>
          </table>
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>Alfa</th>
                <th scope='col'>Iqlimiy hudud</th>
                <th scope='col'>l</th>
                <th scope='col'>d</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputValues.alfa}</td>
                <td>{inputValues.iqlimiyHudud}</td>
                <td>{inputValues.l}</td>
                <td>{inputValues.dk}</td>
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

export default FourteenthLab;