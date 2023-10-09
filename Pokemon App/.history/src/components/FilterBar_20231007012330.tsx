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
  return (
    <section className="filterBar">
      <button onClick={() => setVisibility(true)}>Filters</button>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div
        className={`filtersBox ${visibility && "filter__visible"}`}
        onMouseLeave={() => setVisibility(false)}>
        <h3>Filters</h3>
        <label htmlFor="filtering">Type</label>
        <select
          name="filtering"
          id="filtering"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleFilterSelect(e)
          }>
          <option value="bug">bug</option>
          <option value="dark">dark</option>
          <option value="dragon">dragon</option>
          <option value="electric">electric</option>
          <option value="fighting">fighting</option>
          <option value="fire">fire</option>
          <option value="flying">flying</option>
          <option value="ghost">ghost</option>
          <option value="grass">grass</option>
          <option value="normal">normal</option>
          <option value="none">none</option>
          <option value="psychic">psychic</option>
          <option value="ground">ground</option>
          <option value="ice">ice</option>
          <option value="poison">poison</option>
          <option value="rock">rock</option>
          <option value="steel">steel</option>
          <option value="water">water</option>
        </select>
        <label htmlFor="ordering">Order</label>
        <select
          name="ordering"
          id="ordering"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleOrdering(e)
          }>
          <option value="AB">A-Z</option>
          <option value="BA">Z-A</option>
          <option value="12">1-2</option>
          <option value="21">2-1</option>
        </select>
      </div>
    </section>
  );
}

export default FilterBar;
