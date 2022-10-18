import React from "react";
import styled from "styled-components";

function Button({ children, onClick }) {
  // eslint-disable-next-line react/jsx-filename-extension
  return (
    <BtnStyle type="button" onClick={onClick}>
      {children}
    </BtnStyle>
  );
}

export default Button;

const BtnStyle = styled.button`
  width: 150px;
  height: 40px;
  background: transparent;
  box-sizing: border-box;
  border: 2px solid #000;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;
