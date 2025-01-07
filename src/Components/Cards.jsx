import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../Store/UserSlice";

const Cards = () => {
    const dispatch = useDispatch();
   // Correctly accessing user state from the store
   const users = useSelector((state) => state.user.users); // Since the reducer is named 'user' in the store
   const loading = useSelector((state) => state.user.loading);
   const error = useSelector((state) => state.user.error);
    useEffect(() => {
      console.log("Inside useEffect");
      dispatch(getUsers()); // Dispatching the async action to fetch users
    }, [dispatch]);
  
    useEffect(() => {
      console.log("Fetched Users:", users); // Logs the fetched users data
    }, [users]);

    if(loading)
    {
    return(
        <h2>Loading....</h2>
    )
    }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="card-link">
            Card link
          </a>
          <a href="/" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
