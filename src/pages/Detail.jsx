import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addReply } from "../redux/modules/replySlice";

function Detail() {
  const GlobalReply = useSelector((state) => state);
  // const [reply, setReply] = useState([]);
  const replyRef = useRef();
  const dispatch = useDispatch();
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
          </ButtonBox>
        </ContentsBox>

        <FlexColumn>
          <FlexRow>
            <input ref={replyRef} />
            <button
              onClick={() => {
                const replies = {
                  reply: replyRef.current.value,
                };
                console.log(replies);
                dispatch(addReply(replies));
              }}
            >
              댓글 등록하기
            </button>
          </FlexRow>

          {/* {GlobalReply.map((item) => {
            return (
              <div key={item}>
                {item}
                <button
                  onClick={() =>
                    deleteReply(() => {
                      dispatch(deleteReply(item.id));
                    })
                  }
                >
                  댓글삭제하기
                </button>
              </div>
            );
          })} */}
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
