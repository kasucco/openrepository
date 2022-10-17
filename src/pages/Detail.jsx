import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addReply, deleteReply, editReply } from "../redux/modules/replySlice";

function Detail() {
  const GlobalReply = useSelector((state) => state.reply);
  console.log(GlobalReply);
  // const [reply, setReply] = useState([]);
  const replyRef = useRef();
  const dispatch = useDispatch();
  const id = Date.now();

  const [mode, setMode] = useState("READ");

  function dispatchAdd() {
    const replies = {
      reply: replyRef.current.value,
      id: id,
    };
    dispatch(addReply(replies));
  }

  function dispatchDelete(id) {
    dispatch(deleteReply(id));
  }

  function dispatchEdit(id, vlaue) {
    const editItem = { id: id, value: vlaue };
    dispatch(editReply(editItem));
  }

  // function deleteBook() {
  //   dispatch();
  // }
  const contents = null;

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
            <button>삭제하기</button>
          </ButtonBox>
        </ContentsBox>

        <FlexColumn>
          <FlexRow>
            <input ref={replyRef} />
            <button onClick={() => dispatchAdd()}>댓글 등록하기</button>
          </FlexRow>

          {GlobalReply.map((item) => {
            return (
              <div key={item.id}>
                {item.reply}
                <button
                  onClick={() => {
                    dispatchDelete(item.id);
                  }}
                >
                  댓글삭제하기
                </button>
                <button onClick={(e) => dispatchEdit(item.id, e.target.value)}>
                  댓글수정하기
                </button>
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
