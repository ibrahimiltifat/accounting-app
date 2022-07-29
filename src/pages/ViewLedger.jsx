import React, { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import { data } from "../data";
import { FaTrash } from "react-icons/fa";

function ViewLedger() {
  
  const [categories, setCategories] = useState(data);
  const [message, SetMessage] = useState("");
  const [newCategory, SetNewCategory] = useState("");

  const handleTextChange = (e) => {
    SetNewCategory(e.target.value);
  };
  const deleteValue = (index,e) => {
    alert("Are you sure you want to delete this ?");
    data.splice(index,1);
    categories.splice(index,1);
    console.log(index)
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory.length === 0) {
      SetMessage("Please enter a valid Category");
    } else {
      if (categories.includes(newCategory)) {
        SetMessage("Category already present");
      } else {
        SetMessage("");
        setCategories([newCategory, ...categories]);
      }
      console.log(categories);
      SetNewCategory("");
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <Navbar />
          <form onSubmit={handleSubmit}>
            <h2>ENTER A NEW CATEGORY</h2>
            <div className="input-group">
              <input
                onChange={handleTextChange}
                type="text"
                placeholder="Enter a Category"
                value={newCategory}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary" type="submit">
                submit
              </button>
            </div>
            {message && <div className="message">{message}</div>}
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
                <p className="col-desc">{item.desc}</p>
                <p className="col-amount">{item.amount}</p>
                <p className="col-date">{item.date}</p>
                <FaTrash className="col-icon" color="#C90000" onClick={(e) => deleteValue(index, e)}/>
              </div>
            ))}
          </div>
          {/* todo SUM */}
          {/* <div className="col-headings">
            <p className="col-desc">Description</p>
            <p className="col-amount">Amount</p>
            <p className="col-date">Date</p>
            <p className="col-icon">xx</p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ViewLedger;
