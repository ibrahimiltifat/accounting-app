import React, { useState } from "react";
import Navbar from "../components/Navbar";

function AddCategory() {
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
        </div>
      </div>
    </>
  );
}

export default AddCategory;
