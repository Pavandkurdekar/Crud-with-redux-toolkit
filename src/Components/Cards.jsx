import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../Store/UserSlice";

const Cards = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);
    const loading = useSelector((state) => state.user.loading);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    if (loading) {
        return <h2>Loading....</h2>;
    }

    return (
        <div className="row">
            {users.map((user) => (
                <div key={user.id} className="col-md-3 col-sm-6 col-12 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{user.address}</h6>
                            <p className="card-text">
                              Gender{user.address}
                            </p>
                            <p className="card-text">
                              Age:{user.id}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
