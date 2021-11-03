import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./littleComponents/customButton.component";
import Title from "./littleComponents/title.component";

const SecondLab = ({ match }) => {
  const [lastStuDoc, setLastStuDoc] = useState(undefined)
  const [areaOfBio, setAreaOfBio] = useState(undefined)
  const [forest, setForest] = useState(undefined)
  const [water, setWater] = useState(undefined)
  const [pasture, setPasture] = useState(undefined)
  const [plough, setPlough] = useState(undefined)
  const [lastNum, setLastNum] = useState(undefined)
  const [areaOfCity, setAreaOfCity] = useState(undefined)
  const [countPeople, setCountPeople] = useState(undefined)
  const [CO, setCO] = useState(undefined)
  const [NO, setNO] = useState(undefined)
  const [SO, setSO] = useState(undefined)
  const [uTab, setUTab] = useState(0)
  const [sBioGetsinoz, setSBioGetSinoz] = useState(undefined)
  const [PB, setPB] = useState({})
  const [consistencePop, setConsistencePop] = useState(undefined)
  const [P, setP] = useState({});
  const [uForest, setUForest] = useState(0);
  const [result, setResult] = useState('');
  const [result1, setResult1] = useState('');

  const Y = {
    mixedForest: {
      min: 1000,
      max: 1500
    },
    plough: {
      min: 500,
      max: 600
    },
    pasture: {
      min: 400,
      max: 500
    },
    water: {
      min: 100,
      max: 100
    },
    city: {
      min: 80,
      max: 100
    }
  }

  const parseF = () => {
    setForest(parseFloat(forest));
    setWater(parseFloat(water));
    setPlough(parseFloat(plough));
    setPasture(parseFloat(pasture));
    setAreaOfBio(parseFloat(areaOfBio));
    setCO(parseFloat(CO));
    setNO(parseFloat(NO));
    setSO(parseFloat(SO));
    setCountPeople(parseFloat(countPeople));
    setAreaOfBio(parseFloat(areaOfCity));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    parseF();
    const sBioGetSinoz = forest + water + plough + pasture;
    const uTab = sBioGetSinoz / areaOfBio;
    const PP = 0.571 * CO + 0.696 * NO + 0.5 * SO;
    const consistencePop = countPeople / areaOfCity;
    const PB = {};
    const P = {};
    const uForest = forest / areaOfBio;
    for (let key in Y) {
      PB[key] = sBioGetSinoz * Y[key].max;
    }
    for (let key in PB) {
      P[key] = 0.04 * (PB[key] - PP);
    }



    setUTab(uTab);
    setSBioGetSinoz(sBioGetSinoz);
    setPB(PB);
    setConsistencePop(consistencePop);
    setP(P);
    setUForest(uForest);

    return getResult();
  }

  function getResult() {
    if (P < 0) {
      setResult1('Muvozanat Buzilgan')
    } else {
      setResult1('Muvozanat Saqlanadi');
    }

    if (uTab > 0.5 && uForest > 0.3) {
      setResult('Barqaror Muvozanat')
    } else if ((uTab >= 0.3 && uTab <= 0.5) && (uForest >= 0.2 && uForest <= 0.3)) {
      setResult('Shartli Muvozanat');
    } else if ((uTab >= 0.2 && uTab < 0.3) && (uForest >= 0.1 && uForest < 0.2)) {
      setResult('NoBarqaror Muvozanat');
    } else {
      setResult('Muvozanatning Yo\'qligi');
    }
  }



  return (
    <Container>
      <Title>Ikkinchi Amaliyot</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <section>
            <label htmlFor="lastNumOfStuDoc">Talabalik guvohnomasining Ohirgi Raqami (km <sup>2</sup>)</label>
            <input type='text' required id='lastNumOfStuDoc' name='lastNumOfStuDoc' onChange={(e) => setLastStuDoc(e.target.value)} />

            <label htmlFor="areaOfBio">Biogetsenozlar Maydoni (km <sup>2</sup>)</label>
            <input type='text' required id='areaOfBio' name='areaOfBio' onChange={(e) => setAreaOfBio(e.target.value)} />

            <label htmlFor="forest">O'rmon</label>
            <input type='text' required id='forest' name='forest'
              onChange={(e) => setForest(e.target.value)}
            />

            <label htmlFor="water">Suv Sirti</label>
            <input type='text' required id='water' name='water'
              onChange={(e) => setWater(e.target.value)}
            />

            <label htmlFor="pasture">Yaylovlar</label>
            <input type='text' required id='pasture' name='pasture'
              onChange={(e) => setPasture(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="plough">Shudgor</label>
            <input type='text' required id='plough' name='plough'
              onChange={(e) => setPlough(e.target.value)}
            />

            <label htmlFor="lastNum">Talabalik guvohnomasining oxiridan oldingi raqami</label>
            <input type='text' required max='9' min='0' id='lastNum' name='lastNum'
              onChange={(e) => setLastNum(e.target.value)}
            />

            <label htmlFor="areaOfCity">Shaharlar Maydoni ming km<sup>2</sup></label>
            <input type='text' id='areaOfCity' name='areaOfCity'
              onChange={(e) => setAreaOfCity(e.target.value)}
            />

            <label htmlFor="countPeople">N (ming kishi.)</label>
            <input type='text' required id='countPeople' name='countPeople'
              onChange={(e) => setCountPeople(e.target.value)}
            />
          </section>

          <section>
            <h2>Ifloslantiruvchi Moddalar Massasi, ming.t./yiliga </h2>

            <label htmlFor="CO">CO</label>
            <input type='text' required id='CO' name='CO'
              onChange={(e) => setCO(e.target.value)}
            />

            <label htmlFor="NO">NO <sub>2</sub></label>
            <input type='text' required id='NO' name='NO'
              onChange={(e) => setNO(e.target.value)}
            />

            <label htmlFor="SO">SO <sub>2</sub></label>
            <input type='text' required id='SO' name='SO'
              onChange={(e) => setSO(e.target.value)}
            />
          </section>
        </div>
        <CustomButton type='submit'>Yechim</CustomButton>
      </form>
      <ResultContainer>
        <h1>Labaratoryia Yechimi</h1>
        <TableContainerLarge>
          <table className="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col" rowSpan='2'>Talabalik Guvohnomasining ohirgi raqami</th>
                <th scope="col" rowSpan='2'>S, ming km<sup>2</sup></th>
                <th scope="col" colSpan='4'>Biogetsenozlar Maydoni, ming km <sup>2</sup></th>
              </tr>
              <tr>
                <th scope="col">O'rmon</th>
                <th scope="col">Suv Sirti</th>
                <th scope="col">Yaylovlar</th>
                <th scope="col">Shudgor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{lastStuDoc}</th>
                <td>{areaOfBio}</td>
                <td>{forest}</td>
                <td>{water}</td>
                <td>{pasture}</td>
                <td>{plough}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col" rowSpan='2'>Talabalik Guvohnomasining ohiridan oldingi raqami</th>
                <th scope="col" rowSpan='2'>Shaharlar maydoni ming km<sup>2</sup></th>
                <th scope="col" rowSpan='2'>N (ming kishi)</th>
                <th scope="col" colSpan='3'>Ifloslantiruvchi moddalar massasi, ming.t/yiliga</th>
              </tr>
              <tr>
                <th scope="col">CO</th>
                <th scope="col">NO <sub>2</sub></th>
                <th scope="col">SO <sub>2</sub></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{lastNum}</th>
                <td>{areaOfCity}</td>
                <td>{countPeople}</td>
                <td>{CO}</td>
                <td>{NO}</td>
                <td>{SO}</td>
              </tr>
            </tbody>
          </table>
        </TableContainerLarge>
        <TableContainerSmall>
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>Guvohnoma ohirgi raqami</th>
                <th scope='col'>Talabaning ismi</th>
                <th scope='col'>S, ming km <sup>2</sup></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{lastStuDoc}</td>
                <td>{match.params.username}</td>
                <td>{areaOfBio}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>O'rmon</th>
                <th scope='col'>Suv</th>
                <th scope='col'>Yaylov</th>
                <th scope='col'>Shud gor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{forest}</td>
                <td>{water}</td>
                <td>{pasture}</td>
                <td>{plough}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>Guvohnoma ohiridan oldingi raqami</th>
                <th scope='col'>Shaharlar maydoni ming km<sup>2</sup></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{lastNum}</td>
                <td>{areaOfCity}</td>
              </tr>
            </tbody>
          </table>
          <table className='table table-bordered table-danger'>
            <thead>
              <tr>
                <th scope='col'>N (ming kishi)</th>
                <th scope='col'>CO</th>
                <th scope='col'>NO<sub>2</sub></th>
                <th scope='col'>SO<sub>2</sub></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{countPeople}</td>
                <td>{CO}</td>
                <td>{NO}</td>
                <td>{SO}</td>
              </tr>
            </tbody>
          </table>
        </TableContainerSmall>
        <h2>Masalaning Javobi</h2>
        <h1>{result1}</h1>
        <h1>{result}</h1>
        <p style={{ display: 'none' }}>{sBioGetsinoz + consistencePop + PB}</p>
      </ResultContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: radial-gradient(
    134.34% 134.34% at 50% 0%,
    #1f3757 0%,
    #131537 100%
  );
  color: #fff;
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 70vh;
    width: 100%;
    padding: 10px 30px;
    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      @media screen and (max-width: 720px) {
        display: flex;
        flex-direction: column;
      }
      section{
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media screen and (max-width: 720px) {
          width: 100%;
          font-size: 14px;
        }
        h2{
          color: #cf3535;
          @media screen and (max-width: 720px) {
            font-size: 20px;
            text-align: center;
            margin: 10px 0px;
          }
        }
        input{
          outline: none;
          border: none;
          padding: 8px 10px;
          border-radius: 20px;
          box-shadow: 0 0 10px #000000;
          &:hover{
            box-shadow: 0 0 15px #000000;
          }
        }
      }
    }

    button{
      width: 100px;
      &:hover{
        box-shadow: 0 0 15px #f55454;
      }
    }
  }
`

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 30px;
  h1{
    color: aqua;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 10px;
    /* width: 500px; */
    h1{
      font-size: 20px;
      color: aqua;
    }
    h2{
      font-size: 24px;
      margin-bottom: 25px;
    }
  }
`

const TableContainerLarge = styled.div`
  width: 80%;
  text-align: center;
  @media screen and (max-width: 720px) {
    display: none;
  }
`

const TableContainerSmall = styled.div`
  width: 100%;
  font-size: 14px;
  display: none;
  @media screen and (max-width: 720px) {
    display: inline-block;
  }
`

export default SecondLab;