import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import StudentList from "./components/StudentList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <StudentList />
    </div>
  );
};

export default App;
