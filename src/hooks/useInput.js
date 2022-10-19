import React, { useCallback, useState } from "react";

function useInput() {
  const [inputs, setInputs] = useState({
    id: "",
    title: "",
    content: "",
  });

  const changeHandle = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({ ...inputs, [name]: value, id: Date.now() });
    },
    [inputs, setInputs]
  );

  return [inputs, changeHandle];
}

export default useInput;
