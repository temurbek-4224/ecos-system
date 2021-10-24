import React from "react";
import styled from "styled-components";

const CustomInput = ({ handleChange, children, ...otherInputProps }) => {
  return (
    <InputContainer>
      <InputGroup className="input-group input-group-sm mb-3">
        <label>{otherInputProps.label}</label>
        <input
          style={{
            width: '240px'
          }}
          className="form-control"
          aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          onChange={handleChange}
          {...otherInputProps}
        />
      </InputGroup>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  width: 500px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
`;

export default CustomInput;