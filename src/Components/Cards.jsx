import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../Store/UserSlice";
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import EditModal from "./EditModal";
import "./Cards.css";
import DeleteModal from "./DeleteModal";

const Cards = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const [showEditor, setShowEditor] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading....</h2>;
  }

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setShowEditor(true);
  };

  const handleDelete = (user) => {
    setSelectedUser(user)
    setShowDeleteModal(true)

  }

  const handleCloseDelete = ()=> {
    setShowDeleteModal(false)
  }

  const handleCloseModal = () => {
    setShowEditor(false);
    setSelectedUser(null);
  };

 // Ensure users is an array before calling map
 const userList = Array.isArray(users) ? users : [];

 return (
   <>
     <div className={showEditor ? "blurred" : ""}>
       <div className="row">
         {userList.map((user) => (
           <div key={user.id} className="col-md-3 col-sm-6 col-12 mb-4">
             <div className="card">
               <div className="card-body position-relative">
                 <div className="icons position-absolute top-0 end-0 p-2">
                   <FiEdit2
                     onClick={() => handleEditClick(user)}
                     className="icon edit-icon"
                     style={{ marginRight: "10px", cursor: "pointer" }}
                   />
                   <FiTrash2
                     onClick={() => handleDelete(user)}
                     className="icon delete-icon"
                     style={{ marginRight: "10px", cursor: "pointer" }}
                   />
                   <FiEye
                     className="icon view-icon"
                     style={{ cursor: "pointer" }}
                   />
                 </div>
                 <h5 className="card-title">{user.name}</h5>
                 <h6 className="card-subtitle mb-2 text-body-secondary">
                   {user.address}
                 </h6>
                 <p className="card-text">Gender: {user.gender}</p>
                 <p className="card-text">Age: {user.id}</p>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>

     {showEditor && <EditModal user={selectedUser} onClose={handleCloseModal} />}
     {showDeleteModal && (
       <DeleteModal user={selectedUser} closemodal={handleCloseDelete} />
     )}
   </>
 );
};

export default Cards;