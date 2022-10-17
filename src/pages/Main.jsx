import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import styled from "styled-components";
import Layout from "../components/share/Layout";
import Button from "../components/share/Buttons";
import { useSelector } from "react-redux";

function Main() {
  // const navigate = useNavigate();
  const review = useSelector((state) => state.book.reviews);
  console.log(review);
  return (
    <Layout>
      <Button
      // onClick={() => {
      //   navigate("form");
      // }}
      >
        등록하기
      </Button>
      <div>
        <GridUl>
          {review.map((item) => {
            return (
              <LiSize key={item.id}>
                <TextSize>{item.title}</TextSize>
                <p>{item.content}</p>
              </LiSize>
            );
          })}

          <LiSize>
            <TextSize>글</TextSize>
            <p>내용</p>
          </LiSize>
          <LiSize>
            <TextSize>글</TextSize>
            <p>내용</p>
          </LiSize>
          <LiSize>
            <TextSize>글</TextSize>
            <p>내용</p>
          </LiSize>
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
  border: 2px solid #000;
  border-radius: 10px;
  text-align: center;
  list-style: none;
`;

const TextSize = styled.h1`
  font-size: 20px;
`;
