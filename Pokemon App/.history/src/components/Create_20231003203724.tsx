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
          <fieldset>
            <input type="checkbox" value="bug" /> <span>Bug</span>
            <input type="checkbox" value="dark" /> <span>Dark</span>
            <input type="checkbox" value="dragon" /> <span>Dragon</span>
            <input type="checkbox" value="electric" /> <span>Electric</span>
            <input type="checkbox" value="fighting" /> <span>Fighting</span>
            <input type="checkbox" value="fire" /> <span>Fire</span>
            <input type="checkbox" value="ghost" /> <span>Ghost</span>
            <input type="checkbox" value="grass" /> <span>Grass</span>
            <input type="checkbox" value="normal" /> <span>Normal</span>
            <input type="checkbox" value="psychic" /> <span>Psychic</span>
            <input type="checkbox" value="ground" /> <span>Ground</span>
            <input type="checkbox" value="ice" /> <span>Ice</span>
            <input type="checkbox" value="poison" /> <span>Poison</span>
            <input type="checkbox" value="rock" /> <span>Rock</span>
            <input type="checkbox" value="steel" /> <span>Steel</span>
            <input type="checkbox" value="water" /> <span>Water</span>
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default Create;
