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
  console.log(globalReview);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectReview(reviewid.id));
  }, []);

  const onDeleteHandler = (globalReviewId) => {
    dispatch(__deleteReviews(globalReviewId));
    navigate("/");
  };

  return (
    <ContentsBox>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        이전으로
      </Button>
      <TitleBox>
        <h1>{globalReview.title}</h1>
        <h2>{globalReview.content}</h2>
      </TitleBox>

      <ButtonBox>
        <Button
          onClick={() => {
            navigate("/modify");
          }}
        >
          수정하기
        </Button>
        <Button
          onClick={() => {
            onDeleteHandler(globalReview.id);
          }}
        >
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
  width: auto;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
