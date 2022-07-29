import Header from "./components/Header";
import AddCategory from "./pages/AddCategory";
import AddPrice from "./pages/AddPrice";
import ViewLedger from "./pages/ViewLedger";
import db from "./Firebase";
import React, { useState, useEffect } from "react";
// import firebase from "./Firebase";
import { collection, getDocs,doc, getDoc,query,setDoc } from "firebase/firestore"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  // const ref = firebase.firestore().collection("developers");
  // console.log(ref);
  const getToken = async () => {
    // const docRef =  doc(db,  "developers","dev1");
    // const docSnap = await getDoc(docRef);
  // const querySnapshot = await getDocs(collection(db, "developers","dev1"));
  // console.log(docSnap.data());
  const q = query(collection(db, "categories"));
  const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
  // const citiesRef = collection(db, "categories");
  // console.log(citiesRef.getDocs)
  // console.log(querySnapshot.size)  

  // await setDoc(doc(citiesRef, "water"), {});
  }
  // getToken();
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
