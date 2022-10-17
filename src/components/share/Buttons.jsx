import React from "react";
import styled from "styled-components";

function Button({ onClick, children }) {
  // eslint-disable-next-line react/jsx-filename-extension
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
}

export default Button;
