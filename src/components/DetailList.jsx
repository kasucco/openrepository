import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { selectReview } from "../redux/modules/bookSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../components/share/Buttons";
import { __deleteReviews } from "../redux/modules/bookSlice";

const DetailList = () => {
  const globalReview = useSelector((state) => state.book.review);
  const reviewid = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectReview(reviewid.id));
  }, []);

  const onDeleteHandler = (globalReviewId) => {
    dispatch(__deleteReviews(globalReviewId));
  };

  return (
    <ContentsBox>
      <TitleBox>
        <h1>{globalReview.title}</h1>
        <h2>{globalReview.content}</h2>
      </TitleBox>

      <ButtonBox>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로
        </Button>
        <Button>수정하기</Button>
        <Button onClick={() => onDeleteHandler(globalReview.id)}>
          삭제하기
        </Button>
      </ButtonBox>
    </ContentsBox>
  );
};

export default DetailList;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  border: 2px solid gray;
  border-radius: 20px;

  margin: 20px;
  width: 600px;
  height: 300px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 400px;
  height: 250px;
  border: 2px solid gray;
  border-radius: 20px;

  box-sizing: border-box;
  padding: 40px;
  margin: 0 20px;
`;
