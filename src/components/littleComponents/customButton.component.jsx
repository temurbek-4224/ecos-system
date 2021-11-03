import React from "react";
import styled from "styled-components";

const CustomButton = ({ children, type }) => {
  return (
    <Button className='btn btn-danger' type={type}>
      {children}
    </Button>
  )
}

const Button = styled.button`
  width: 100px;
  margin-top: 15px;
  &:hover{
    box-shadow: 0 0 15px #f55454;
  }
`

export default CustomButton;