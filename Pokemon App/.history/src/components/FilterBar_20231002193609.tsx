import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setSearch } from "../redux/slices/data";

function FilterBar() {
  const [search, setSearch] = useState<string>("");

  const dispatch = useAppDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleSearch() {
    if (search.length > 0) {
      dispatch(setSearch(search));
    }
  }

  return (
    <section>
      <button>Filters</button>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleChange}
        />
        <button>Search</button>
      </div>
    </section>
  );
}

export default FilterBar;
