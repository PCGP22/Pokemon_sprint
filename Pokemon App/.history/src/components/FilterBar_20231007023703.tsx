import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setFilter, setSearch, setOrder } from "../redux/slices/data";

function FilterBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibility, setVisibility] = useState(false);

  const dispatch = useAppDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleSearch() {
    dispatch(setSearch(searchTerm));
  }

  function handleFilterSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setFilter(e.target.value));
  }
  function handleOrdering(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setOrder(e.target.value));
    console.log("in");
  }

  function handleClick(e: any) {
    e.stopPropagation();
    setVisibility(false);
  }

  function handleKeyDown(e: any) {
    if (e.keyCode === 13) {
      //Detect enter
      handleSearch();
      setSearchTerm("");
    }
  }

  return (
    <section className="filterBar">
      <div
        className={`backColor ${visibility && "backColor__visible"}`}
        onClick={handleClick}
      />
      <button onClick={() => setVisibility(!visibility)}>Filters</button>
      <div className="filter__search">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={`filtersBox ${visibility && "filter__visible"}`}>
        <h3>Filters</h3>
        <hr />
        <div className="filters__options">
          <label htmlFor="filtering">Type</label>
          <select
            name="filtering"
            id="filtering"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleFilterSelect(e)
            }>
            <option value="bug">bug</option>
            <option value="dragon">dragon</option>
            <option value="electric">electric</option>
            <option value="fairy">fairy</option>
            <option value="fighting">fighting</option>
            <option value="fire">fire</option>
            <option value="ghost">ghost</option>
            <option value="grass">grass</option>
            <option value="normal">normal</option>
            <option value="psychic">psychic</option>
            <option value="ground">ground</option>
            <option value="ice">ice</option>
            <option value="poison">poison</option>
            <option value="rock">rock</option>
            <option value="water">water</option>
          </select>
          <label htmlFor="ordering">Order</label>
          <select
            name="ordering"
            id="ordering"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleOrdering(e)
            }>
            <optgroup label="Alphabetical">
              <option value="AB">Ascending</option>
              <option value="BA">Descending</option>
            </optgroup>
            <optgroup label="By id">
              <option value="12">Ascending</option>
              <option value="21">Descending</option>
            </optgroup>
          </select>
        </div>
        <button onClick={handleClick} className="filter__closeButton">
          Close filters
        </button>
      </div>
    </section>
  );
}

export default FilterBar;
