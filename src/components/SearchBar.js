import React from "react";
import "./SearchBar.css";

export default function SearchBar({ onSubmit }) {
    const [term, setTerm] = React.useState('');

  const handleClick = (e) => {
    e.preventDefault();

    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleClick}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
