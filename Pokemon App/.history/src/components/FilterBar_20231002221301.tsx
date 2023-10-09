import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setFilter, setSearch } from "../redux/slices/data";

function FilterBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");

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
  function handleOrdering() {}
  return (
    <section>
      <button>Filters</button>
      <button onClick={() => handleFilter("grass")}>Filter</button>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
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
      </div>
    </section>
  );
}

export default FilterBar;
