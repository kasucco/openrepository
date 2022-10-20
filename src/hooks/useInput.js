import React, { useCallback, useState } from "react";

function useInput(initialState) {
  const [inputs, setInputs] = useState(initialState);

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value, id: initialState.id });
    if (value.length > value.maxLength)
      value.value = value.value.slice(0, value.maxLength);
  };

  return [inputs, changeHandle];
}

export default useInput;
