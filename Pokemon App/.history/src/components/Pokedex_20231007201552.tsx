// import React from 'react'
import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import evolutions from "../data/evolution";
import axios from "axios";
import leftButtons from "../img/Button-left.png";
import rightButtons from "../img/Button-right.png";
import NavBar from "./NavBar";

// import axios from "axios";

type PokedexProps = {
  id: number;
};

function Pokedex(props: PokedexProps) {
  const [id, setId] = useState<number>(props.id);
  const [description, setDescription] = useState<string>("Loading description");

  let images: any[] = [];

  let allData: any = useAppSelector((state) => state.dataReducer.processedData);
  const [searchTerm, setSearchTerm] = useState<string>(allData?.name);
  let data = allData.filter((d: any) => d.id === id);
  data = data[0];

  const [spriteImg, setSpriteImg] = useState<string>("");
  async function getDescription() {
    let { data }: any = await axios(
      `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    );
    let englishDescription = data.flavor_text_entries.find(
      (d: any) => d.language.name === "en"
    );
    setDescription(englishDescription.flavor_text);
  }

  useEffect(() => {
    function handleKeyLeftRight(e: any) {
      // console.log(e.keyCode);
      if (e.keyCode === 37) handlePrev();
      if (e.keyCode === 39) handleNext();
    }

    document.addEventListener("keydown", handleKeyLeftRight);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyLeftRight);
    };
  }, []);

  useEffect(() => {
    getDescription();
    setSpriteImg(data?.sprites?.front_default);
  }, [id]);
  if (data?.id) {
    let evoChain = evolutions.filter((e) => e.includes(data.id));
    if (evoChain[0].length === 1) {
      images = [{ id: data.id, sprite: data.sprites.front_default }];
    } else {
      images = [];
      evoChain[0].forEach((e) => {
        let imagesFromState: any = allData.filter((d: any) => d.id === e);
        let sprite = imagesFromState[0].sprites.front_default;
        images.push({ id: e, sprite: sprite });
      });
    }
  } else {
    return;
  }
  function handleSprite() {
    if (spriteImg === data.sprites.front_default)
      setSpriteImg(data.sprites.back_default);
    if (spriteImg === data.sprites.back_default)
      setSpriteImg(data.sprites.front_default);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }
  function handleSearch() {
    // dispatch(setSearch(searchTerm));
    let numberOrString = Number(searchTerm);
    if (!numberOrString) {
      let result = allData.filter((d: any) =>
        d.name.includes(searchTerm.toLowerCase())
      );
      if (result[0]) {
        setId(result[0].id);
      }
    } else {
      let result = allData.filter((d: any) => d.id === Number(searchTerm));
      if (result[0]) {
        setId(result[0].id);
      }
    }
    setSearchTerm("");
  }

  function handleNext() {
    if (id <= 150) {
      setId((id) => (id = id + 1));
    }
  }

  function handlePrev() {
    if (id >= 2) {
      setId((id) => (id = id - 1));
    }
  }

  function handleKeyDown(e: any) {
    if (e.keyCode === 13) {
      //Detect enter
      handleSearch();
      setSearchTerm("");
    }
  }

  function handleSpriteSearch(id: string) {
    setId(Number(id));
  }

  let descriptionFormatted: string[] = description.split("\f");
  let finalDesc =
    descriptionFormatted[0] + "\n" + (descriptionFormatted[1] ?? "");
  //   let descriptionFormatted = description;
  let name = data.name;
  let firstLetter = name.charAt(0).toUpperCase();
  name = name.slice(1);
  name = firstLetter + name;
  return (
    <>
      {/* <NavBar /> */}
      <main className="pokedex__main">
        <div>
          <section className="pokedex__top">
            <svg
              id="Capa_2"
              data-name="Capa 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 811.77 214.71">
              <g id="Capa_1-2" data-name="Capa 1">
                <path
                  className="cls-1"
                  d="m528.17,125.19l-95.75,75.48c-9.44,7.44-21.49,11.53-33.95,11.53H63.06c-33.45,0-60.56-24.8-60.56-55.39V57.89C2.5,27.3,29.61,2.5,63.06,2.5h685.64c33.45,0,60.56,24.8,60.56,55.39v28.36c0,11.65-10.33,21.1-23.07,21.1h-205.52c-19.27,0-37.91,6.33-52.51,17.84Z"
                />
              </g>
            </svg>
            <div className="top__button__green" />
            <ul className="buttons">
              <li />
              <li />
              <li />
            </ul>
            <div className="searchBar">
              <input
                type="text"
                placeholder="Search by name or #id"
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </section>
          <section className="pokedex__main__part">
            <div>
              <figure className="pokedex__image__container">
                <img
                  onClick={handleSprite}
                  src={spriteImg}
                  alt={`sprite of ${data.name}`}
                  className="pokedex__image"
                />
                <div>
                  <div className="red__image__marker" />
                  <ul>
                    <li />
                    <li />
                    <li />
                    <li />
                  </ul>
                </div>
              </figure>
              <section className="pokedex__navigation">
                <img
                  src={leftButtons}
                  alt="left button"
                  onClick={handlePrev}
                  width="60"
                  className="pokedex__leftButton"
                />
                <img
                  src={rightButtons}
                  alt="right button"
                  onClick={handleNext}
                  width="60"
                  className="pokedex__leftButton"
                />
              </section>
            </div>
            <section className="pokedex__data">
              <h1>
                #{data.id} {name}
              </h1>
              <p
                className="pokedex__description"
                style={{ whiteSpace: "pre-line" }}>
                {finalDesc}
              </p>
              <div className="pokedex__types">
                <strong>Type(s): </strong>

                {data.types.map((t: any) => (
                  <span
                    key={t.type.name}
                    className={`flippo__type__text flippo__${t.type.name}`}>
                    {t.type.name.toUpperCase()}
                  </span>
                ))}
              </div>
              <div className="pokedex__addData">
                <p>
                  <strong>Height:</strong>{" "}
                  {((Number(data.height) / 10) * 3)
                    .toFixed(2)
                    .toString()
                    .split(".")
                    .join("'") + `\"`}
                </p>
                <p>
                  <strong>Weight:</strong>{" "}
                  {Number(data.weight) / 10 + " Pounds"}
                </p>
              </div>
            </section>
            <section className="pokedex__evolutions">
              {images?.map((i) => (
                <img
                  src={i.sprite}
                  onClick={() => handleSpriteSearch(i.id)}
                  key={i.id}
                  alt="Evolution Chain"
                />
              ))}
            </section>
          </section>
        </div>
        <div className="pokedex__connection" />
        <section className="pokedex__stats">
          <div className="pokedex__stats__top">
            <svg
              id="Capa_2"
              data-name="Capa 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 811.85 201.82">
              <defs></defs>
              <g id="Capa_1-2" data-name="Capa 1">
                <path
                  className="cls-2"
                  d="m2.5,199.22c.02-19.39.04-31.5.08-33.45v-7.61l.14-.02c.44-23.52.94-55.84-.14-100.25C1.74,23.24,22.27,2.5,46.57,2.5h243.59c9.05,0,17.8,4.09,24.66,11.53l69.54,75.48c10.6,11.51,24.14,17.84,38.14,17.84,0,0,149.26,0,149.26,0,.82.01,1.58.09,2.32.19l190.78-.19c24.57,0,44.5,21.87,44.5,48.85v43.11l-806.85-.1Z"
                />
              </g>
            </svg>
          </div>
          <div className="redBand" />
          <section className="pokedex__statBoard">
            <h3>Base stats:</h3>
            <div className="pokedex__statsNums">
              <div className="pokedex__stats__stats">
                <strong>Hp: </strong>
                <span>{data.stats[0].base_stat}</span> <br />
                <strong>Attack: </strong>
                <span>{data.stats[1].base_stat}</span> <br />
                <strong>Defense: </strong>
                <span>{data.stats[2].base_stat}</span> <br />
                <strong>Sp-att: </strong>
                <span>{data.stats[3].base_stat}</span> <br />
                <strong>Sp-def: </strong>
                <span>{data.stats[4].base_stat}</span> <br />
                <strong>Speed: </strong>
                <span>{data.stats[5].base_stat}</span> <br />
              </div>
              <div className="pokedex__stats__bars">
                <progress
                  value={data.stats[0].base_stat}
                  className={`${
                    data.stats[0].base_stat < 50
                      ? "orange_bar"
                      : data.stats[0].base_stat < 75
                      ? "yellow_bar"
                      : "green_bar"
                  }`}
                  max="150"
                />
                <br />
                <progress
                  value={data.stats[1].base_stat}
                  className={`${
                    data.stats[1].base_stat < 50
                      ? "orange_bar"
                      : data.stats[1].base_stat < 75
                      ? "yellow_bar"
                      : "green_bar"
                  }`}
                  max="150"
                />{" "}
                <br />
                <progress
                  value={data.stats[2].base_stat}
                  className={`${
                    data.stats[2].base_stat < 50
                      ? "orange_bar"
                      : data.stats[2].base_stat < 75
                      ? "yellow_bar"
                      : "green_bar"
                  }`}
                  max="150"
                />{" "}
                <br />
                <progress
                  value={data.stats[3].base_stat}
                  className={`${
                    data.stats[3].base_stat < 50
                      ? "orange_bar"
                      : data.stats[3].base_stat < 75
                      ? "yellow_bar"
                      : "green_bar"
                  }`}
                  max="150"
                />{" "}
                <br />
                <progress
                  value={data.stats[4].base_stat}
                  className={`${
                    data.stats[4].base_stat < 50
                      ? "orange_bar"
                      : data.stats[4].base_stat < 75
                      ? "yellow_bar"
                      : "green_bar"
                  }`}
                  max="150"
                />{" "}
                <br />
                <progress
                  value={data.stats[5].base_stat}
                  className={`${
                    data.stats[5].base_stat < 50
                      ? "orange_bar"
                      : data.stats[5].base_stat < 75
                      ? "yellow_bar"
                      : "green_bar"
                  }`}
                  max="150"
                />{" "}
                <br />
              </div>
            </div>
            <p className="pokedex__statsTotal">
              Total:{" "}
              {Number(data.stats[0].base_stat) +
                Number(data.stats[1].base_stat) +
                Number(data.stats[2].base_stat) +
                Number(data.stats[3].base_stat) +
                Number(data.stats[4].base_stat) +
                Number(data.stats[5].base_stat)}
            </p>
          </section>
        </section>
      </main>
    </>
  );
}

export default Pokedex;
