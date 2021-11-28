import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const CustomInput = ({ handleChange, ...otherInputProps }) => {
  return (
    <InputContainer>
      <InputGroup className="input-group input-group-sm mb-1">
        <Fade right big>
          <label>{otherInputProps.label}</label>
          <input
            style={{
              width: '240px',
              outline: 'none',
              border: 'none',
              padding: '8px 10px',
              borderRadius: '20px',
              boxShadow: '0 0 10px #000000',
              color: '#000',
              fontSize: '16px'
            }}
            maxLength={20}
            required
            className="form-control"
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => handleChange(e)}
            {...otherInputProps}
          />
        </Fade>
      </InputGroup>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  /* width: 500px; */
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
`;

export default CustomInput;