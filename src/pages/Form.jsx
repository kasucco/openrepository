import React from "react";
import styled from "styled-components";
import Layout from "../components/share/Layout";
import Button from "../components/share/Buttons";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __createReviews } from "../redux/modules/bookSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";

function Form() {
  const [inputs, changeHandle] = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onclickSubmitHandler = () => {
    dispatch(__createReviews(inputs));
    navigate("/");
  };

  const isValid = inputs.title.length >= 10 && inputs.content.length >= 10;
  const handleButtonValid = () => {
    if (!isValid) {
      alert("10글자 이상 입력하세요");
    } else {
      onclickSubmitHandler();
    }
  };
  return (
    <Layout>
      <Buttonbox>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로
        </Button>
      </Buttonbox>
      <Formbox>
        <Inputbox>
          <FlexBox>
            <LabelBox>제목</LabelBox>
            <Titleinput
              onChange={changeHandle}
              type="text"
              name="title"
              value={inputs.title}
              placeholder="10자 이상 입력해주세요"
            ></Titleinput>
          </FlexBox>
          <FlexBox>
            <LabelBox>내용</LabelBox>
            <Contentinput
              onChange={changeHandle}
              type="text"
              name="content"
              value={inputs.content}
              placeholder="10자 이상 입력해주세요"
            ></Contentinput>
          </FlexBox>
        </Inputbox>
      </Formbox>
      <Buttonbox>
        <Button
          onClick={() => {
            handleButtonValid();
          }}
          disabled={inputs.content === "" || inputs.title === ""}
        >
          작성완료
        </Button>
      </Buttonbox>
    </Layout>
  );
}

export default Form;

const Formbox = styled.div`
  padding: 20px;
  background: transparent;
  border-radius: 10px;
  display: flex;
`;

const LabelBox = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Inputbox = styled.div`
  padding: 20px;
  background: transparent;
  border-radius: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  :first-child {
    margin-bottom: 30px;
  }
`;

const Titleinput = styled.input`
  padding: 20px;
  background: transparent;
  border-radius: 10px;
  border: 1px solid #666;
`;

const Contentinput = styled.textarea`
  padding: 20px;
  background: transparent;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #666;
  resize: none;
`;

const Buttonbox = styled.div`
  background: transparent;
  text-align: right;
`;
