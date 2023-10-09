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

  function handleFilter(type: string) {
    dispatch(setFilter(type));
  }

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
    </section>
  );
}

export default FilterBar;
