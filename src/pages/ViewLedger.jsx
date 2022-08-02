import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { data } from "../data";
import { FaTrash } from "react-icons/fa";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  setDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import db from "../Firebase";

function ViewLedger() {
  const [sum, setSum] = useState();
  const [testCategories, setTestCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [message, SetMessage] = useState("");
  const [newCategory, SetNewCategory] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      let add= []
      console.log("loading categories");
      const q = query(collection(db, "categories"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        add.push(doc.id);
        console.log(doc.id);
      });
      setTestCategories(add);
    };
    getCategories();
    console.log(testCategories);
  }, []);

  useEffect(()=>{
    calSum(categories);
  },[categories])

  const handleTextChange = (e) => {
    SetNewCategory(e.target.value);
  };
  const deleteValue = async (item) => {
    alert("Are you sure you want to delete this ?");
    await deleteDoc(doc(db, newCategory, item[0]));
    console.log("deleted");
    setData();
  };

  const calSum = (add) => {
    let total = 0;
    add.forEach((item) => (total += Number(item[1].amount)));
    // categories.forEach((item) => (total += 5));
    console.log(total);
    setSum(total);
  };

  const setData = async () => {
    console.log(newCategory);
    const add = [];
    const q = query(collection(db, newCategory));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      add.push([doc.id, doc.data()]);
    });
    setCategories(add);
    // calSum(add);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newCategory);
    setData();
    // if (newCategory.length === 0) {
    //   SetMessage("Please enter a valid Category");
    // } else {
    //   if (categories.includes(newCategory)) {
    //     SetMessage("Category already present");
    //   } else {
    //     SetMessage("");
    //     setCategories([newCategory, ...categories]);
    //   }
    //   console.log(categories);
    //   SetNewCategory("");
    // }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <Navbar />
          <form onSubmit={handleSubmit}>
            <h2>ENTER A NEW CATEGORY</h2>
            {/* <div className="input-group">
              <input
                onChange={handleTextChange}
                type="text"
                placeholder="Enter a Category"
                value={newCategory}
              />
              </div> */}
              <div className="form-select-container">
                <select className="form-select" onChange={handleTextChange} value={newCategory}>
                {testCategories.map((item, index) => (
                   <option >{item}</option> 
                ))}
                </select>
              </div>
            <div className="text-center">
              <button className="btn btn-primary" type="submit">
                submit
              </button>
            </div>
            {/* {message && <div className="message">{message}</div>} */}
          </form>
          <div className="col-headings">
            <p className="col-desc">Description</p>
            <p className="col-amount">Amount</p>
            <p className="col-date">Date</p>
            <p className="col-icon">Delete</p>
          </div>
          <div className="overflow">
            {categories.map((item, index) => (
              <div className="col-headings" key={index}>
                <p className="col-desc">{item[1].description}</p>
                <p className="col-amount">{item[1].amount}</p>
                {/* <p className="col-date">{item.date}</p> */}
                <p className="col-date">21/11/2022</p>
                <FaTrash
                  className="col-icon"
                  color="#C90000"
                  onClick={(e) => deleteValue(item)}
                />
              </div>
            ))}
          </div>
          {/* todo SUM */}
          {sum && (
            <div className="col-sum-container">
              <p className="col-sum"> Sum</p>
              <p className="col-sum">{sum}</p>
              <p className="col-date"></p>
              <p className="col-icon"></p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ViewLedger;
