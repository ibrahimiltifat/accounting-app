import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { arr } from "../data";

function ViewLedger() {
  const [weightsArray, setWeightsArray] = useState(arr);
  const [categories, setCategories] = useState(["a", "b", "c"]);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);

  useEffect(() => {
    if (category.length > 0 && categories.includes(category) === false) {
      setMessage("Category not present");
    } else if (categories.includes(category) === true) {
      setMessage("");
    }
  }, [category]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    let newWeights = [...weightsArray];
    newFormValues[i][e.target.name] = e.target.value;
    setWeightsArray(newWeights);
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    console.log(weightsArray);
  };

  return (
    <>
      <div className="container">
        <div className="card ">
          <Navbar />
          <form onSubmit={handleSubmit}>
            <h2>Enter Ledger Name</h2>
            <div className="input-group">
              <input
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Enter a Category"
              />
            </div>
            {message && <div className="message">{message}</div>}
            <div className="text-center">
              <button className="btn btn-primary" type="submit">
                submit
              </button>
            </div>
            <div className="list-heading">
              <h4>Category</h4>
              <h4>Description</h4>
              <h4>Amount</h4>
              <h4>Date</h4>
              <h4></h4>
            </div>
          </form>
          <div>
            {weightsArray.map(function (d, idx) {
              return (
                <div className="list-heading">
                  <h4>{d.category}</h4>
                  <h4>{d.description}</h4>
                  <h4>{d.amount}</h4>
                  <h4>{d.date}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewLedger;
