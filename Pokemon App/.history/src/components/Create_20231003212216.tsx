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
            <label htmlFor="image" onClick={handleClick} tabIndex={1}>
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              ref={hiddenFileInput}
              style={{ display: "none" }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" name="name" id="name" tabIndex={2} />
            <br />
            <label htmlFor="description">Description</label>
            <br />
            <textarea name="description" id="description" tabIndex={2} />
            <br />
            <fieldset>
              <p>Type(s)</p>
              <input type="checkbox" value="bug" tabIndex={2} />{" "}
              <span>Bug</span> <br />
              <input type="checkbox" value="dark" tabIndex={2} />{" "}
              <span>Dark</span> <br />
              <input type="checkbox" value="dragon" tabIndex={2} />{" "}
              <span>Dragon</span> <br />
              <input type="checkbox" value="electric" tabIndex={2} />{" "}
              <span>Electric</span>
              <br />
              <input type="checkbox" value="fighting" tabIndex={2} />{" "}
              <span>Fighting</span>
              <br />
              <input type="checkbox" value="fire" tabIndex={2} />{" "}
              <span>Fire</span> <br />
              <input type="checkbox" value="ghost" tabIndex={2} />{" "}
              <span>Ghost</span> <br />
              <input type="checkbox" value="grass" tabIndex={2} />{" "}
              <span>Grass</span> <br />
              <input type="checkbox" value="normal" tabIndex={2} />{" "}
              <span>Normal</span> <br />
              <input type="checkbox" value="psychic" tabIndex={2} />{" "}
              <span>Psychic</span>
              <br />
              <input type="checkbox" value="ground" tabIndex={2} />{" "}
              <span>Ground</span> <br />
              <input type="checkbox" value="ice" tabIndex={2} />{" "}
              <span>Ice</span> <br />
              <input type="checkbox" value="poison" tabIndex={2} />{" "}
              <span>Poison</span> <br />
              <input type="checkbox" value="rock" tabIndex={2} />{" "}
              <span>Rock</span> <br />
              <input type="checkbox" value="steel" tabIndex={2} />{" "}
              <span>Steel</span> <br />
              <input type="checkbox" value="water" tabIndex={2} />{" "}
              <span>Water</span> <br />
            </fieldset>
            <label htmlFor="species">Species</label>
            <br />
            <input type="text" id="species" name="species" tabIndex={2} />{" "}
            <br />
            <label htmlFor="height">Height</label>
            <br />
            <input type="text" id="height" name="height" tabIndex={2} />
            <br />
            <label htmlFor="weight">Weight</label> <br />
            <input type="text" id="weight" name="weight" tabIndex={2} />
          </fieldset>
          <fieldset>
            <h2>Base stats:</h2>
            <label htmlFor="hp">HP</label>{" "}
            <input
              type="number"
              id="hp"
              name="hp"
              min={0}
              max={150}
              tabIndex={2}
            />
            <br />
            <label htmlFor="attack">Attack</label>{" "}
            <input
              type="number"
              id="attack"
              name="attack"
              min={0}
              max={150}
              tabIndex={2}
            />
            <br />
            <label htmlFor="defense">Defense</label>{" "}
            <input
              type="number"
              id="defense"
              name="defense"
              min={0}
              max={150}
              tabIndex={2}
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
