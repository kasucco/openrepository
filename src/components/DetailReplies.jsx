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
  const GlobalReply = useSelector((state) => state.reply.replies);
  console.log(GlobalReply);
  const dispatch = useDispatch();
  const pageId = useParams();
  // console.log("해당 페이지 id", pageId.id);

  //DB를 어떻게 사용해야 할지 모르겠음.

  //하나하나 넣은뒤 useEffect로 값이 변화할때마다 띄우기.

  //onClick => dispatch(__postReply())

  //액션객체를 보낼 때 axios.post를 이용할 수 있는 thunk 사용

  //리듀서로 값을 변화시키는 동시에 비동기로 서버에 저장한다.

  const replyRef = useRef();
  const editRef = useRef();

  const id = Date.now();

  function dispatchAdd() {
    const replies = {
      reply: replyRef.current.value,
      id: id,
      pageId: pageId,
    };
    dispatch(__postReplies(replies));

    replyRef.current.value = "";
  }

  function dispatchDelete(itemId) {
    dispatch(__deleteReplies(itemId));
  }

  //mount 됐을 때 dispatch하기

  useEffect(() => {
    dispatch(__getReplies());
  }, []);
  //모드 사용하기 실험
  const [mode, setMode] = useState("READ");

  // READ 모드일 때 댓글 값 관리 state, 그리고 item id도
  const [itemValue, setItemValue] = useState(null);
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
