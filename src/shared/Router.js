import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
<<<<<<< HEAD
=======
import Form from "../pages/Form";
import Main from "../pages/Main";
>>>>>>> main

function Router() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
