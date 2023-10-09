// import React from 'react'
import NavBar from "./NavBar";
import { useRef } from "react";
import { useState } from "react";
import Slider from "./Slider";
import Footer from "./Footer";

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

  const initialStateStats = {
    hp: 60,
    att: 60,
    def: 60,
    sp_att: 60,
    sp_def: 60,
    speed: 60,
  };

  type StatsProps = "hp" | "att" | "def" | "sp_att" | "sp_def" | "speed";

  const hiddenFileInput: any = useRef(null);
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState<any>(initialState);
  const [stats, setStats] = useState<any>(initialStateStats);

  function handleStats(prop: StatsProps, value: number) {
    setStats({ ...stats, prop: value });
  }

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

  const refhp = useRef("hp");

  function handleReset() {
    console.log(refhp);
  }

  return (
    <div>
      <NavBar />
      <header className="homePage__header header">
        <h1>Create your own Pokémon</h1>
        <p>
          Use an image from your PC and create a brand new Pokémon of your own.
        </p>
      </header>
      <div className="container">
        <main className=".create">
          <form>
            <fieldset className="create__top">
              <div>
                <h1>Create your own Pokémon</h1>
                <div className="first__create__form">
                  <fieldset className="upload__image__container">
                    <div className="upload__image__frame">
                      <label
                        htmlFor="image"
                        className="image__upload"
                        onClick={handleClick}
                        tabIndex={1}>
                        Upload Image
                      </label>
                    </div>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      ref={hiddenFileInput}
                      style={{ display: "none" }}
                    />
                  </fieldset>
                  <fieldset className="data__fieldset">
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      tabIndex={2}
                      className="create__inputs"
                    />
                    <br />
                    <label htmlFor="description">Description</label>
                    <br />
                    <textarea
                      name="description"
                      id="description"
                      tabIndex={2}
                      className="create__inputs"
                    />
                    <br />
                    <fieldset className="create__inputs__container">
                      <p
                        tabIndex={2}
                        onFocus={() => setVisible(true)}
                        onClick={handleVisible}
                        className="create__inputs select__type__label">
                        Type(s) (max 2) <strong>⌵</strong>
                      </p>
                      {visible && (
                        <div className="type__select">
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
                          <span
                            tabIndex={2}
                            onBlur={() => setVisible(false)}></span>
                        </div>
                      )}
                    </fieldset>
                    <label htmlFor="height">Height</label>
                    <br />
                    <input
                      type="text"
                      id="height"
                      name="height"
                      tabIndex={2}
                      className="create__inputs"
                    />
                    <br />
                    <label htmlFor="weight">Weight</label> <br />
                    <input
                      type="text"
                      id="weight"
                      name="weight"
                      tabIndex={2}
                      className="create__inputs"
                    />
                  </fieldset>
                </div>
              </div>
              <div>
                <fieldset className="stats__inputs">
                  <h3>Base stats:</h3>

                  <div className="slider__container">
                    <label htmlFor="hp">HP</label>{" "}
                    <Slider state={"hp"} maxWidth={300} />
                  </div>
                  <div className="slider__container">
                    <label htmlFor="attack">Att</label>{" "}
                    <Slider state={handleStats} maxWidth={300} />
                  </div>
                  <div className="slider__container">
                    <label htmlFor="defense">Def</label>{" "}
                    <Slider state={handleStats} maxWidth={300} />
                  </div>
                  <div className="slider__container">
                    <label htmlFor="sp-att">Sp-att</label>{" "}
                    <Slider state={handleStats} maxWidth={300} />
                  </div>
                  <div className="slider__container">
                    <label htmlFor="sp-def">Sp-def</label>{" "}
                    <Slider state={handleStats} maxWidth={300} />
                  </div>
                  <div className="slider__container">
                    <label htmlFor="speed">Speed</label>{" "}
                    <Slider state={handleStats} maxWidth={300} />
                  </div>
                </fieldset>
                <fieldset className="buttons__create">
                  <button
                    type="reset"
                    tabIndex={2}
                    className="create__buttons reset__form"
                    onClick={handleReset}>
                    Reset form
                  </button>
                  <button
                    type="button"
                    tabIndex={2}
                    className="create__buttons create__pokemon">
                    Create Pokémon
                  </button>
                </fieldset>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Create;
