import React from "react";
import styled from "styled-components";
import Layout from "./Layout";
import Button from "./Button";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const [review, setReview] = useState({
    id: "",
    title: "",
    content: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, id: Date.now(), [name]: value });
  };
  const onclickSubmitHandler = useCallback(() => {
    console.log(review);
    setReview({ title: "", content: "" });
    console.log(review);
  }, []);

  const isValid = review.title.length >= 10 && review.content.length >= 10;
  const handleButtonValid = () => {
    if (!isValid) {
      alert("10글자 이상 입력하세요");
    } else {
      onclickSubmitHandler();
    }
  };
  return (
    <Layout>
      <Formbox>
        <Inputbox>
          <label>제목</label>
          <Titleinput
            onChange={onChangeHandler}
            type="text"
            name="title"
            value={review.title}
          ></Titleinput>
          <label>내용</label>
          <Contentinput
            onChange={onChangeHandler}
            type="text"
            name="content"
            value={review.content}
          ></Contentinput>
        </Inputbox>
        <Buttonbox>
          <div>이전으로</div>
          <Button
            onClick={handleButtonValid}
            style={{
              width: "100px",
              height: "200px",
            }}
          >
            작성완료
          </Button>
        </Buttonbox>
      </Formbox>
    </Layout>
  );
}

export default Form;

const Formbox = styled.div`
  padding: 20px;
  background: transparent;
  border: 1px solid #666;
  border-radius: 10px;
  display: flex;
`;

const Inputbox = styled.div`
  padding: 20px;
  background: transparent;
  border: 1px solid #666;
  border-radius: 10px;
  display: flex;
  width: 80%;
  flex-direction: column;
  float: left;
`;

const Titleinput = styled.input`
  padding: 20px;
  background: transparent;
  border-radius: 10px;
  border: 1px solid #666;
  background-color: #666;
`;

const Contentinput = styled.input`
  padding: 20px;
  background: transparent;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #666;
  background-color: #666;
`;

const Buttonbox = styled.div`
  padding: 20px;
  background: transparent;
  background-color: #666;
  flex-direction: column;
  justify-content: space-between;
`;