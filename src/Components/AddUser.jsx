import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../Store/UserSlice";
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";

const AddUser = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();
 // const loading = useSelector((state)=> state.user.loading);
  const error = useSelector((state)=> state.user.error);

  const createUser1 = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCreateuser = (e)=>{
    e.preventDefault(); // Prevent form from submitting and refreshing the page
    console.log("User = ",user)

   console.log("error = ", error)
   dispatch(createUser({user: user}));

    if(error == null)
    {
     navigate('/all-users');
    }
    else{
      console.log("Else Block Error = ", error)
    }

  }

  return (
    <div
      style={{
        maxWidth: "500px", // Decrease the width of the form
        margin: "0 auto", // Center the form
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={createUser1}
            type="text"
            className="form-control"
            id="name"
            name="name" // Added name attribute
            placeholder="Enter name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            onChange={createUser1}
            type="text"
            className="form-control"
            id="address"
            name="address" // Added name attribute
            placeholder="Enter address"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            onChange={createUser1}
            type="text"
            className="form-control"
            id="phone"
            name="phone" // Added name attribute
            placeholder="Enter phone number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={createUser1}
            type="number"
            className="form-control"
            id="age"
            name="age" // Added name attribute
            placeholder="Enter age"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            onChange={createUser1}
            className="form-control"
            id="gender"
            name="gender" // Added name attribute
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button onClick={handleCreateuser} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
