// import React from 'react'
import NavBar from "./NavBar";

function Create() {
  return (
    <div>
      <NavBar />
      <main>
        <form>
          <h1>Create your own Pokémon</h1>
          <label htmlFor="image">Upload Image</label>
          <input type="file" name="image" id="image" />
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" />
          <label htmlFor="type">Type(s)</label>
          <input type="checkbox" />
          Algo
        </form>
      </main>
    </div>
  );
}

export default Create;
