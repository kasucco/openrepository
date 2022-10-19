import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addReply, deleteReply, editReply } from "../redux/modules/replySlice";
import { useEffect } from "react";
import { selectReview } from "../redux/modules/bookSlice";
import { useParams } from "react-router-dom";
import {
  __postReplies,
  __getReplies,
  __deleteReplies,
  __patchReplies,
} from "../redux/modules/replySlice";
import { useNavigate } from "react-router-dom";

import Button from "../components/share/Buttons";
import Layout from "./share/Layout";

function DetailReplies() {
  // 자료 설명
  // state 조회 :
  // 최상단 : reply, reviews 리듀서 (객체)
  // 다음 :
  const GlobalReply = useSelector((state) => state.reply.replies);
  const dispatch = useDispatch();
  const pageId = useParams();

  //액션객체를 보낼 때 axios.post를 이용할 수 있는 thunk 사용

  //리듀서로 값을 변화시키는 동시에 비동기로 서버에 저장한다.

  // 디스패치 -> 미들웨어 -> 액션객체

  //댓글 작성 값
  const replyRef = useRef();
  //댓글 수정 값
  const editRef = useRef();

  //댓글 하나하나 구분 id
  const id = Date.now();

  //댓글을 추가 (post)
  function dispatchAdd() {
    const replies = {
      reply: replyRef.current.value,
      id: id,
      pageId: pageId,
    };
    dispatch(__postReplies(replies));

    replyRef.current.value = "";
  }

  //댓글 삭제 (delete)
  function dispatchDelete(itemId) {
    dispatch(__deleteReplies(itemId));
  }

  //mount 됐을 때 fetch
  useEffect(() => {
    dispatch(__getReplies());
  }, []);

  //모드로 댓글 수정 토글 만들기
  const [mode, setMode] = useState("READ");

  // READ 모드일 때 댓글 값 관리 state,
  const [itemValue, setItemValue] = useState(null);

  // READ 모드일 때 넘겨준 id
  const [_itemId, setItemId] = useState(null);

  // 모드변경 토글 (인자값으로 받아오는 댓글값)
  function modeTogle(itemReply, itemId) {
    if (mode === "EDIT") {
      const editValue = editRef.current.value;
      const patchObject = { itemId: _itemId, editValue };
      setMode("READ");
      dispatch(__patchReplies(patchObject));
    } else if (mode === "READ") {
      setMode("EDIT");
      setItemValue(itemReply);
      setItemId(itemId);
    }
  }
  // 모드 변경시 렌더링할 값
  let contents = null;

  if (mode === "READ") {
    contents = GlobalReply.map((item) => {
      //맵을 돌릴 때 id가 같은 댓글만 띄워줘!
      if (pageId.id === item.pageId.id) {
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
            <Button onClick={() => modeTogle(item.reply, item.id)}>
              댓글수정하기
            </Button>
          </div>
        );
      }
    });
  } else if (mode === "EDIT") {
    contents = (
      <div>
        <input defaultValue={itemValue} ref={editRef} />
        <Button onClick={() => modeTogle()}>수정완료</Button>
      </div>
    );
  }
  return (
    <FlexColumn>
      <FlexRow>
        <InputSt placeholder="댓글을 입력해주세요" ref={replyRef} />
        <Button onClick={() => dispatchAdd()}>댓글 등록하기</Button>
      </FlexRow>
      {contents}
    </FlexColumn>
  );
}

export default DetailReplies;

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
