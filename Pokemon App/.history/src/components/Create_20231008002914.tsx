// import React from 'react'
import NavBar from "./NavBar";
import { useRef } from "react";
import { useState } from "react";
import Slider from "./Slider";
import pokedexBackground from "../img/Pokedex background.png";

function Create() {
  const initialState = {
    bug: false,
    dark: false,
    dragon: false,
    electric: false,
    fighting: false,
    fire: false,
    flying: false,
    ghost: false,
    grass: false,
    normal: false,
    none: false,
    psychic: false,
    ground: false,
    ice: false,
    poison: false,
    rock: false,
    steel: false,
    water: false,
  };

  const hiddenFileInput: any = useRef(null);
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState<any>(initialState);
  function handleClick() {
    hiddenFileInput.current.click();
  }
  function handleVisible() {
    setVisible(!visible);
  }

  function handleTypes(e: any) {
    if (checked[e.target.value] === true) {
      setChecked({ ...checked, [e.target.value]: false });
    } else if (Object.values(checked).filter((k) => k === true).length <= 1) {
      setChecked({ ...checked, [e.target.value]: true });
    }
  }

  return (
    <div>
      {/* <NavBar /> */}
      <main className=".create">
        <form>
          {/* <img
            src={pokedexBackground}
            alt="background Pokedex top"
            className="create__image__top"
          /> */}
          <fieldset className="create__top">
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
                <p
                  tabIndex={2}
                  onFocus={() => setVisible(true)}
                  onClick={handleVisible}>
                  Type(s) (max 2)
                </p>
                {visible && (
                  <div>
                    <input
                      type="checkbox"
                      value="bug"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["bug"]}
                    />{" "}
                    <span>Bug</span> <br />
                    <input
                      type="checkbox"
                      value="dark"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["dark"]}
                    />{" "}
                    <span>Dark</span> <br />
                    <input
                      type="checkbox"
                      value="dragon"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["dragon"]}
                    />{" "}
                    <span>Dragon</span> <br />
                    <input
                      type="checkbox"
                      value="electric"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["electric"]}
                    />{" "}
                    <span>Electric</span>
                    <br />
                    <input
                      type="checkbox"
                      value="fighting"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["fighting"]}
                    />{" "}
                    <span>Fighting</span>
                    <br />
                    <input
                      type="checkbox"
                      value="fire"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["fire"]}
                    />{" "}
                    <span>Fire</span> <br />
                    <input
                      type="checkbox"
                      value="ghost"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["ghost"]}
                    />{" "}
                    <span>Ghost</span> <br />
                    <input
                      type="checkbox"
                      value="grass"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["grass"]}
                    />{" "}
                    <span>Grass</span> <br />
                    <input
                      type="checkbox"
                      value="normal"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["normal"]}
                    />{" "}
                    <span>Normal</span> <br />
                    <input
                      type="checkbox"
                      value="psychic"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["psychic"]}
                    />{" "}
                    <span>Psychic</span>
                    <br />
                    <input
                      type="checkbox"
                      value="ground"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["ground"]}
                    />{" "}
                    <span>Ground</span> <br />
                    <input
                      type="checkbox"
                      value="ice"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["ice"]}
                    />{" "}
                    <span>Ice</span> <br />
                    <input
                      type="checkbox"
                      value="poison"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["poison"]}
                    />{" "}
                    <span>Poison</span> <br />
                    <input
                      type="checkbox"
                      value="rock"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["rock"]}
                    />{" "}
                    <span>Rock</span> <br />
                    <input
                      type="checkbox"
                      value="steel"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["steel"]}
                    />{" "}
                    <span>Steel</span> <br />
                    <input
                      type="checkbox"
                      value="water"
                      tabIndex={2}
                      onClick={handleTypes}
                      checked={checked["water"]}
                    />{" "}
                    <span>Water</span> <br />
                    <span tabIndex={2} onBlur={() => setVisible(false)}></span>
                  </div>
                )}
              </fieldset>
              <label htmlFor="height">Height</label>
              <br />
              <input type="text" id="height" name="height" tabIndex={2} />
              <br />
              <label htmlFor="weight">Weight</label> <br />
              <input type="text" id="weight" name="weight" tabIndex={2} />
            </fieldset>
            <fieldset>
              <h2>Base stats:</h2>
              <label htmlFor="hp">HP</label> <Slider maxWidth={600} />
              <br />
              <label htmlFor="attack">Attack</label> <Slider maxWidth={600} />
              <br />
              <label htmlFor="defense">Defense</label> <Slider maxWidth={600} />
              <br />
              <label htmlFor="sp-att">Sp-att</label> <Slider maxWidth={600} />
              <br />
              <label htmlFor="sp-def">Sp-def</label> <Slider maxWidth={600} />
              <br />
              <label htmlFor="speed">Speed</label> <Slider maxWidth={600} />
              <br />
            </fieldset>
            <fieldset>
              <button type="button" tabIndex={2}>
                Reset form
              </button>
              <button type="button" tabIndex={2}>
                Create Pokémon
              </button>
            </fieldset>
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default Create;
