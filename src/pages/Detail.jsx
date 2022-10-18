import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addReply, deleteReply, editReply } from "../redux/modules/replySlice";
import { useEffect } from "react";
import { selectReview } from "../redux/modules/bookSlice";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/share/Layout";
import Button from "../components/share/Buttons";
import {
  __postReplies,
  __getReplies,
  __deleteReplies,
} from "../redux/modules/replySlice";

function Detail() {
  const globalReview = useSelector((state) => state.book.review);
  const reviewid = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(selectReview(reviewid.id));
  }, []);

  const GlobalReply = useSelector((state) => state.reply.replies);

  const replyRef = useRef();
  const dispatch = useDispatch();
  const id = Date.now();

  function dispatchAdd() {
    const replies = {
      reply: replyRef.current.value,
      id: id,
    };
    dispatch(__postReplies(replies));
  }

  function dispatchDelete(itemId) {
    dispatch(__deleteReplies(itemId));
  }

  //mount 됐을때 dispatch 하기
  useEffect(() => {
    dispatch(__getReplies());
  }, []);

  return (
    <Layout>
      <FlexColumn>
        <ContentsBox>
          <TitleBox>
            <h1>{globalReview.title}</h1>
            <h2>{globalReview.content}</h2>
          </TitleBox>

          <ButtonBox>
            <button>수정하기</button>
            <button>삭제하기</button>
          </ButtonBox>
        </ContentsBox>

        <FlexColumn>
          <FlexRow>
            <InputSt placeholder="댓글을 입력해주세요" ref={replyRef} />
            <Button onClick={() => dispatchAdd()}>댓글 등록하기</Button>
          </FlexRow>

          {GlobalReply.map((item) => {
            return (
              <div key={item.id}>
                {item.reply}
                <Button
                  onClick={() => {
                    dispatchDelete(item.id);
                  }}
                >
                  댓글삭제하기
                </Button>
                {/* <Button onClick={(e) => dispatchEdit(item.id, e.target.value)}>
                  댓글수정하기
                </Button> */}
              </div>
            );
          })}
        </FlexColumn>
      </FlexColumn>
    </Layout>
  );
}

export default Detail;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputSt = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #000;
  padding: 10px 0;
  margin-bottom: 20px;
  padding-left: 10px;
  outline: none;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
`;

const TitleBox = styled.div`
  width: auto;
  padding: 50px 0;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
