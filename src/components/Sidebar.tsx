import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="/Frame.png" alt="Profile" />
        <h3>Yellow Owl</h3>
        <p>Admin</p>
      </div>
    </div>
  );
};

export default Sidebar;
