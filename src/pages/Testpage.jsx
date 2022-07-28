import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Testpage() {
  
  const data=[
  {
    desc:"aa",
    amount:25,
    date:"25/7/2022"
  },
  {
    desc:"this is a nicerr descr",
    amount:25000,
    date:"25/10/201"
  },
    ]     
  const [categories, setCategories] = useState([]);
  const [message, SetMessage] = useState("");
  const [newCategory, SetNewCategory] = useState("");

  const handleTextChange = (e) => {
    SetNewCategory(e.target.value);
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
            <h2 className="col-desc">Description</h2>
            <h2 className="col-amount">Amount</h2>
            <h2 className="col-date">Date</h2>
            <h2 className="col-icon">xx</h2>
          </div>
        {data.map((item, index) => (
        <div className="col-headings" key={index}>
        <h2 className="col-desc" >{item.desc}</h2>
        <h2 className="col-amount" >{item.amount}</h2>
        <h2 className="col-date" >{item.date}</h2>
        <h2 className="col-date">xx</h2>
        </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Testpage;
