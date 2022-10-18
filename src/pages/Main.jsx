import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import styled from "styled-components";
import Layout from "../components/share/Layout";
import Button from "../components/share/Buttons";
import { useSelector } from "react-redux";
function Main() {
  const navigate = useNavigate();
  const review = useSelector((state) => state.book.reviews);
  return (
    <Layout>
      <Button onClick={() => navigate("form")}>등록하기</Button>
      <div>
        <GridUl>
          {review.map((item) => {
            return (
              <LiSize
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
                key={item.id}
              >
                <TextSize>{item.title}</TextSize>
                <p>{item.content}</p>
              </LiSize>
            );
          })}
        </GridUl>
      </div>
    </Layout>
  );
}

export default Main;

const GridUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-left: 0;
  grid-gap: 30px;
`;

const LiSize = styled.li`
  width: auto;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  list-style: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const TextSize = styled.h1`
  font-size: 20px;
`;
