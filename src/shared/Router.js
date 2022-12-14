import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Form from "../pages/Form";
import Main from "../pages/Main";
import Modify from "../pages/Modify";

function Router() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/modify" element={<Modify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
