import React, { useState } from "react";
import "./AddStudentForm.css";

interface AddStudentFormProps {
  onSubmit: (student: {
    name: string;
    email: string;
    phone: string;
    enrollNumber: string;
    dateOfAdmission: string;
  }) => void;
  onClose: () => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({
  onSubmit,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enrollNumber, setEnrollNumber] = useState("");
  const [dateOfAdmission, setDateOfAdmission] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, phone, enrollNumber, dateOfAdmission });
    onClose();
  };

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <h2>Add New Student</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enroll Number"
        value={enrollNumber}
        onChange={(e) => setEnrollNumber(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Date of Admission"
        value={dateOfAdmission}
        onChange={(e) => setDateOfAdmission(e.target.value)}
        required
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
      <button type="button" className="cancel-button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default AddStudentForm;
