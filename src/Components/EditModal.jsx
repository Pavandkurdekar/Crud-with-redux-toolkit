import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Store/UserSlice";

const EditModal = ({ user, onClose }) => {
  const [newUser, setnewUser] = useState({});
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading); // Redux loading state

  useEffect(() => {
    if (user) {
      setnewUser(user);
    }
  }, [user]);

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setnewUser({ ...newUser, [name]: value });
  };

  const handleSave = async () => {
    const finalnewuser = {
      name: newUser.name,
      address: newUser.address,
      gender: newUser.gender,
      phone: newUser.phone,
    };

    try {
      await dispatch(updateUser({ id: newUser.id, updatedUser: finalnewuser }));
      console.log("Updated User = ", newUser);
      onClose(); // Close modal after the update is complete
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit User</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={onClose}
                aria-label="Close"
                disabled={loading} // Disable close while loading
              ></button>
            </div>
            <div className="modal-body">
              {loading ? (
                <h3>Updating User...</h3> // Show loading message
              ) : (
                <>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={newUser.name || ""}
                    onChange={handleEdit}
                  />
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    id="address"
                    value={newUser.address || ""}
                    onChange={handleEdit}
                  />
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <input
                    name="gender"
                    type="text"
                    className="form-control"
                    id="gender"
                    value={newUser.gender || ""}
                    onChange={handleEdit}
                  />
                </>
              )}
            </div>
            {!loading && (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  onClick={handleSave}
                  type="button"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
