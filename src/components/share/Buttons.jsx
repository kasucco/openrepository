import React from "react";
import styled from "styled-components";

function Button({ children, onClick }) {
  // eslint-disable-next-line react/jsx-filename-extension
  return (
    <BtnCover>
      <BtnStyle type="button" onClick={onClick}>
        {children}
      </BtnStyle>
    </BtnCover>
  );
}

export default Button;

const BtnCover = styled.div`
  text-align: right;
`;

const BtnStyle = styled.button`
  width: 150px;
  height: 40px;
  background: transparent;
  box-sizing: border-box;
  border: 2px solid #000;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #000;
    color: #fff;
  }
`;
