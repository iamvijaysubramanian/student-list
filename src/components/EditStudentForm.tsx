import React, { useState, useEffect } from "react";
import "./EditStudentForm.css";

interface EditStudentFormProps {
  student: {
    id: number;
    name: string;
    email: string;
    phone: string;
    enrollNumber: string;
    dateOfAdmission: string;
  };
  onSubmit: (student: {
    id: number;
    name: string;
    email: string;
    phone: string;
    enrollNumber: string;
    dateOfAdmission: string;
  }) => void;
  onClose: () => void;
}

const EditStudentForm: React.FC<EditStudentFormProps> = ({
  student,
  onSubmit,
  onClose,
}) => {
  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [phone, setPhone] = useState(student.phone);
  const [enrollNumber, setEnrollNumber] = useState(student.enrollNumber);
  const [dateOfAdmission, setDateOfAdmission] = useState(
    student.dateOfAdmission
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: student.id,
      name,
      email,
      phone,
      enrollNumber,
      dateOfAdmission,
    });
    onClose();
  };

  useEffect(() => {
    setName(student.name);
    setEmail(student.email);
    setPhone(student.phone);
    setEnrollNumber(student.enrollNumber);
    setDateOfAdmission(student.dateOfAdmission);
  }, [student]);

  return (
    <form className="edit-student-form" onSubmit={handleSubmit}>
      <h2>Edit Student</h2>
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
        Update
      </button>
      <button type="button" className="cancel-button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default EditStudentForm;
