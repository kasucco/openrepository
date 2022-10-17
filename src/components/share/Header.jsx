import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../../font/font.css';

function Header() {
  const navigate = useNavigate();
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Head>
      <InnerHead
        onClick={() => {
          navigate('/');
        }}
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
  height: 50px;
  background: transparent;
  border: 1px solid #666;
`;

const InnerHead = styled.div`
  font-family: 'ONE-Mobile-Title';
`;

const HeadH1 = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;

const HeadP = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
`;
