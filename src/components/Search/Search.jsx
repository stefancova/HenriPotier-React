import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import "./Search.scss";

const Search = () => {
  const context = useContext(MainContext);

  return (
    <form className="form">
      <input
        className="input"
        type=""
        placeholder="Enter search..."
        onChange={e => context.setSearch(e.target.value.toLowerCase())}
      />
    </form>
  );
};
export default Search;
