// import React from 'react'
import NavBar from "./NavBar";
import { useRef } from "react";

function Create() {
  const hiddenFileInput: any = useRef(null);
  function handleClick() {
    hiddenFileInput.current.click();
  }
  return (
    <div>
      <NavBar />
      <main>
        <form>
          <h1>Create your own Pokémon</h1>
          <fieldset>
            <label htmlFor="image" onClick={handleClick}>
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              ref={hiddenFileInput}
              style={{ display: "hidden" }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" name="name" id="name" />
            <br />
            <label htmlFor="description">Description</label>
            <br />
            <textarea name="description" id="description" />
            <br />
            <fieldset>
              <p>Type(s)</p>
              <input type="checkbox" value="bug" /> <span>Bug</span> <br />
              <input type="checkbox" value="dark" /> <span>Dark</span> <br />
              <input type="checkbox" value="dragon" /> <span>Dragon</span>{" "}
              <br />
              <input type="checkbox" value="electric" /> <span>Electric</span>
              <br />
              <input type="checkbox" value="fighting" /> <span>Fighting</span>
              <br />
              <input type="checkbox" value="fire" /> <span>Fire</span> <br />
              <input type="checkbox" value="ghost" /> <span>Ghost</span> <br />
              <input type="checkbox" value="grass" /> <span>Grass</span> <br />
              <input type="checkbox" value="normal" /> <span>Normal</span>{" "}
              <br />
              <input type="checkbox" value="psychic" /> <span>Psychic</span>
              <br />
              <input type="checkbox" value="ground" /> <span>Ground</span>{" "}
              <br />
              <input type="checkbox" value="ice" /> <span>Ice</span> <br />
              <input type="checkbox" value="poison" /> <span>Poison</span>{" "}
              <br />
              <input type="checkbox" value="rock" /> <span>Rock</span> <br />
              <input type="checkbox" value="steel" /> <span>Steel</span> <br />
              <input type="checkbox" value="water" /> <span>Water</span> <br />
            </fieldset>
            <label htmlFor="species">Species</label>
            <br />
            <input type="text" id="species" name="species" /> <br />
            <label htmlFor="height">Height</label>
            <br />
            <input type="text" id="height" name="height" />
            <br />
            <label htmlFor="weight">Weight</label> <br />
            <input type="text" id="weight" name="weight" />
          </fieldset>
          <fieldset>
            <h2>Base stats:</h2>
            <label htmlFor="hp">HP</label>{" "}
            <input type="number" id="hp" name="hp" />
            <br />
            <label htmlFor="attack">Attack</label>{" "}
            <input type="number" id="attack" name="attack" min={0} max={150} />
            <br />
            <label htmlFor="defense">Defense</label>{" "}
            <input
              type="number"
              id="defense"
              name="defense"
              min={0}
              max={150}
            />
            <br />
            <label htmlFor="sp-att">Sp-att</label>{" "}
            <input type="number" id="sp-att" name="sp-att" min={0} max={150} />
            <br />
            <label htmlFor="sp-def">Sp-def</label>{" "}
            <input type="number" id="sp-def" name="sp-def" min={0} max={150} />
            <br />
            <label htmlFor="speed">Speed</label>{" "}
            <input type="number" id="speed" name="speed" min={0} max={150} />
            <br />
          </fieldset>
          <fieldset>
            <button type="button">Reset form</button>
            <button type="button">Create Pokémon</button>
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default Create;
