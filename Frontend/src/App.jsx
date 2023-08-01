import React from "react";
import Main from "./pages/main";
import Redirect from "./pages/redirect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
