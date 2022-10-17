import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addReply } from "../redux/modules/replySlice";

function Detail() {
  const GlobalReply = useSelector((state) => state);
  console.log(GlobalReply.reply.reply);
  // const [reply, setReply] = useState([]);
  const replyRef = useRef();
  const dispatch = useDispatch();
  const id = Date.now();

  function plusReply() {
    const replies = {
      reply: replyRef.current.value,
      id: id,
    };

    dispatch(addReply(replies));
  }

  // function deleteBook() {
  //   dispatch();
  // }

  function deleteReply() {}

  return (
    <div>
      <FlexColumn>
        <ContentsBox>
          <TitleBox>
            <h1>title</h1>
            <h2>contents</h2>
          </TitleBox>

          <ButtonBox>
            <button>수정하기</button>
            {/* <button
              onClick={() => {
                dispatch(deleteBook(id));
              }}
            >
              삭제하기
            </button> */}
          </ButtonBox>
        </ContentsBox>

        <FlexColumn>
          <FlexRow>
            <input ref={replyRef} />
            <button onClick={() => plusReply()}>댓글 등록하기</button>
          </FlexRow>

          {GlobalReply.reply.reply.map((item) => {
            return (
              <div key={item.id}>
                {item}
                {/* <button
                  onClick={() =>
                    deleteReply(() => {
                      dispatch(deleteReply(item.id));
                    })
                  }
                >
                  댓글삭제하기
                </button> */}
              </div>
            );
          })}
        </FlexColumn>
      </FlexColumn>
    </div>
  );
}

export default Detail;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border: 1px solid gray;

  max-width: 1200px;
  width: 95%;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  background-color: beige;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  background-color: green;

  width: 800px;
  height: 300px;
`;

const TitleBox = styled.div`
  width: 1000px;
  height: 200px;
  border: 1px solid gray;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
