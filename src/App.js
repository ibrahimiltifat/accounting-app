import Header from "./components/Header";
import AddCategory from "./pages/AddCategory";
import AddPrice from "./pages/AddPrice";
import ViewLedger from "./pages/ViewLedger";
import db from "./Firebase";
import React, { useState, useEffect } from "react";
import firebase from "./Firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const ref = firebase.firestore().collection("developers");
  console.log(ref);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AddPrice />}></Route>
          <Route path="/AddCategory" element={<AddCategory />}></Route>
          <Route path="/ViewLedger" element={<ViewLedger />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
