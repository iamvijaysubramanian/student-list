import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentList.css";
import Modal from "./Modal";
import AddStudentForm from "./AddStudentForm";
import EditStudentForm from "./EditStudentForm";
import DeleteConfirmation from "./DeleteConfirmation";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  enrollNumber: string;
  dateOfAdmission: string;
}

type NewStudent = Omit<Student, "id">;

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/students").then((response) => {
      setStudents(response.data);
    });
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addStudent = (newStudent: NewStudent) => {
    const studentWithId: Student = { ...newStudent, id: students.length + 1 };
    setStudents([...students, studentWithId]);
  };

  const updateStudent = (updatedStudent: Student) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  const deleteStudent = (studentId: number) => {
    setStudents(students.filter((student) => student.id !== studentId));
  };

  const handleEditClick = (student: Student) => {
    setSelectedStudent(student);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (student: Student) => {
    setSelectedStudent(student);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="student-list">
      <div className="header">
        <h2>Students</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => setIsAddModalOpen(true)}>Add New Student</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ENROLL NUMBER</th>
            <th>DATE OF ADMISSION</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.enrollNumber}</td>
              <td>{student.dateOfAdmission}</td>
              <td>
                <button onClick={() => handleEditClick(student)}>Edit</button>
                <button onClick={() => handleDeleteClick(student)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
        <AddStudentForm
          onSubmit={addStudent}
          onClose={() => setIsAddModalOpen(false)}
        />
      </Modal>
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        {selectedStudent && (
          <EditStudentForm
            student={selectedStudent}
            onSubmit={updateStudent}
            onClose={() => setIsEditModalOpen(false)}
          />
        )}
      </Modal>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        {selectedStudent && (
          <DeleteConfirmation
            student={selectedStudent}
            onDelete={() => {
              deleteStudent(selectedStudent.id);
              setIsDeleteModalOpen(false);
            }}
            onClose={() => setIsDeleteModalOpen(false)}
          />
        )}
      </Modal>
    </div>
  );
};

export default StudentList;
