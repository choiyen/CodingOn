import "./style/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Studentkdt from "./pages/Studentkdt";
import Header from "./components/header.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Student/:student" element={<Studentkdt />} />
          <Route
            path="/Student/:student?name=kdt3rd"
            element={<Studentkdt />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
