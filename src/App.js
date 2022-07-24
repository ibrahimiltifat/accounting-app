import Header from "./components/Header";
import AddCategory from "./pages/AddCategory";
import AddPrice from "./pages/AddPrice";
import db from "./Firebase";
import React, { useState, useEffect } from "react";
import firebase from "./Firebase";
function App() {
  const ref = firebase.firestore().collection("developers");
  console.log(ref);
  return (
    <>
      <Header />
      <div className="container">
        <AddPrice />
        {/* <AddCategory /> */}
      </div>
    </>
  );
}

export default App;
