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
        </form>
      </main>
    </div>
  );
}

export default Create;
