import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  setDoc,
  addDoc,
} from "firebase/firestore";
import db from "../Firebase";
import { testData } from "../data";
import { async } from "@firebase/util";

function AddPrice() {
  const [weightsArray, setWeightsArray] = useState([]);
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    const getCategories = async () => {
      console.log("loading categories");
      const q = query(collection(db, "categories"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        categories.push(doc.id);
        console.log(doc.id);
      });
    };
    getCategories();
  }, []);

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

  let handleSubmit = async (event) => {
    event.preventDefault();
    setCategory("");
    console.log(category);
    setFormValues([{ name: "", email: "" }]);
    const citiesRef = collection(db, category);
    formValues.forEach(async (tuple) => {
      await setDoc(doc(citiesRef), {
        description: tuple.name,
        amount: tuple.email,
      });
    });

    console.log("written");
  };

  return (
    <>
      <div className="container">
        <div className="card ">
          <Navbar />
          <h2>ENTER A CATEGORY</h2>
          <div className="input-group">
            <input
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Enter a Category"
              value={category}
              //   value={newCategory}
            />
          </div>
          {message && <div className="message">{message}</div>}

          <form onSubmit={handleSubmit}>
            {formValues.map((element, index) => (
              <div className="form" key={index}>
                {/* <label>Description</label> */}
                <div className="input-group">
                  <input
                    // className="input-group"
                    type="text"
                    name="name"
                    placeholder="description"
                    value={element.name || ""}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>

                {/* <label>Amount</label> */}
                <div className="input-group">
                  <input
                    // className="input-group"
                    type="text"
                    name="email"
                    placeholder="Amount"
                    value={element.email || ""}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
              </div>
            ))}
            <div>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => addFormFields()}
                >
                  Add
                </button>
                <button className="btn btn-secondary " type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddPrice;
