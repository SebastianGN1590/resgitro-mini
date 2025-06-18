import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Register from "./components/Register.jsx";
import List from "./pages/list.jsx";

function App() {
  return (
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          < Route path="/register" element={<Register />} />
          < Route path="/list" element={<List />} />
      </Routes>
      </BrowserRouter >
     
  );
}

export default App;