import React from "react";
import styled from "styled-components";
import "../../font/font.css";

function Header() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Head>
      <InnerHead
      // onClick={() => {
      //   navigate("/");
      // }}
      >
        <HeadH1>북적북적</HeadH1>
        <HeadP>나만의 책 기록장</HeadP>
      </InnerHead>
    </Head>
  );
}

export default Header;

const Head = styled.div`
  padding: 20px;
  box-sizing: border-box;
  height: 100px;
  background: transparent;
  border: 1px solid #666;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const InnerHead = styled.div`
  font-family: "ONE-Mobile-Title";
`;

const HeadH1 = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;

const HeadP = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
