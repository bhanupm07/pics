import React from "react";
import "./SearchBar.css";

export default function SearchBar({ onSubmit, term, setTerm, setTitle }) {
  // const [term, setTerm] = React.useState('');

  const handleClick = (e) => {
    e.preventDefault();
    onSubmit(term);
    setTerm("");
    setTitle(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleClick}>
        <label>SNAPSHOT</label>
        <input
          value={term}
          onChange={handleChange}
          placeholder="Enter Search Term"
        />
      </form>
    </div>
  );
}
