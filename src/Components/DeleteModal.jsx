import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../Store/UserSlice";

const DeleteModal = ({ closemodal, user }) => {
  const dispatch = useDispatch();

  const confirmDelete = () => {
    dispatch(deleteUser({ user: user }));
    closemodal();
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1050,
        }}
      >
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{
            maxWidth: "400px", // Decrease the width of the modal
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Delete</h5>
              <button
                onClick={closemodal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete user {user.name}?</p>
            </div>
            <div className="modal-footer">
              <button
                onClick={closemodal}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                type="button"
                className="btn btn-danger"
                id="confirmDelete"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
