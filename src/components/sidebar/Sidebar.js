import React, { useState } from "react";
import "./sidebar.css";

export default function Sidebar({ submit }) {
  const [term, setTerm] = useState("");

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    submit(term); //parent to child pass the data
  };
  const handlechange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="search">
      <form onSubmit={handleFormOnSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handlechange} />
      </form>
    </div>
  );
}

// Child to parent components to share the data in props using submit event handler function
