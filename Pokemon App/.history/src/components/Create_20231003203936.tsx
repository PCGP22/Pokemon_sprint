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
          <br />
          <input type="file" name="image" id="image" />
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" name="name" id="name" />
          <label htmlFor="description">Description</label>
          <br />
          <textarea name="description" id="description" />
          <fieldset>
            <label htmlFor="type">Type(s)</label> <br />
            <input type="checkbox" value="bug" /> <span>Bug</span> <br />
            <input type="checkbox" value="dark" /> <span>Dark</span> <br />
            <input type="checkbox" value="dragon" /> <span>Dragon</span> <br />
            <input type="checkbox" value="electric" /> <span>Electric</span>
            <br />
            <input type="checkbox" value="fighting" /> <span>Fighting</span>
            <br />
            <input type="checkbox" value="fire" /> <span>Fire</span> <br />
            <input type="checkbox" value="ghost" /> <span>Ghost</span> <br />
            <input type="checkbox" value="grass" /> <span>Grass</span> <br />
            <input type="checkbox" value="normal" /> <span>Normal</span> <br />
            <input type="checkbox" value="psychic" /> <span>Psychic</span>
            <br />
            <input type="checkbox" value="ground" /> <span>Ground</span> <br />
            <input type="checkbox" value="ice" /> <span>Ice</span> <br />
            <input type="checkbox" value="poison" /> <span>Poison</span> <br />
            <input type="checkbox" value="rock" /> <span>Rock</span> <br />
            <input type="checkbox" value="steel" /> <span>Steel</span> <br />
            <input type="checkbox" value="water" /> <span>Water</span> <br />
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default Create;
