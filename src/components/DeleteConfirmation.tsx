import React from "react";
import "./DeleteConfirmation.css";

interface DeleteConfirmationProps {
  student: {
    id: number;
    name: string;
  };
  onDelete: () => void;
  onClose: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  student,
  onDelete,
  onClose,
}) => {
  return (
    <div className="delete-confirmation">
      <h2>Are you sure you want to delete {student.name}?</h2>
      <div className="buttons">
        <button className="delete-button" onClick={onDelete}>
          Yes
        </button>
        <button className="cancel-button" onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
