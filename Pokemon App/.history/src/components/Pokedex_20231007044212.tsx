// import React from 'react'
import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import evolutions from "../data/evolution";
import axios from "axios";
import leftButtons from "../img/Button-left.png";
import NavBar from "./NavBar";

// import axios from "axios";

type PokedexProps = {
  id: number;
};

function Pokedex(props: PokedexProps) {
  const [id, setId] = useState<number>(props.id);
  const [description, setDescription] = useState<string>("Loading description");

  let images: string[] = [];

  let allData: any = useAppSelector((state) => state.dataReducer.processedData);
  const [searchTerm, setSearchTerm] = useState<string>(allData?.name);
  let data = allData.filter((d: any) => d.id === id);
  data = data[0];

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
    getDescription();
  }, [id]);
  if (data?.id) {
    let evoChain = evolutions.filter((e) => e.includes(data.id));
    if (evoChain[0].length === 1) {
      images = [data.sprites.front_default];
    } else {
      images = [];
      evoChain[0].forEach((e) => {
        let imagesFromState: any = allData.filter((d: any) => d.id === e);
        images.push(imagesFromState[0].sprites.front_default);
      });
    }
  } else {
    return;
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

  let descriptionFormatted: string[] = description.split("\f");
  let finalDesc = descriptionFormatted[0] + "\n" + descriptionFormatted[1];
  //   let descriptionFormatted = description;

  return (
    <>
      {/* <NavBar /> */}
      <main className="pokedex__main">
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
                src={data.sprites.front_default}
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
            <section>
              <img
                src={leftButtons}
                alt="left button"
                onClick={handlePrev}
                width="60"
                className="pokedex__leftButton"
              />
              <button onClick={handleNext}>Right</button>
            </section>
          </div>
          <section>
            <h1>
              #{data.id} {data.name}
            </h1>
            <p style={{ whiteSpace: "pre-line" }}>{finalDesc}</p>
            <strong>Type(s): </strong>
            {data.types.map((t: any) => (
              <span key={t.type.name}>{t.type.name.toUpperCase()}</span>
            ))}
            <p>
              <strong>Species:</strong> {data.species.name}
            </p>
            <p>
              <strong>Weight:</strong> {data.weight}
            </p>
            <p>
              <strong>Height:</strong> {data.height}
            </p>
          </section>
          <section>
            {images?.map((i) => (
              <img src={i} key={i} alt="Evolution Chain" />
            ))}
          </section>
        </section>
        <section>
          <strong>Hp:</strong>
          <span>{data.stats[0].base_stat}</span>
          <progress value={data.stats[0].base_stat} max="150" /> <br />
          <strong>Attack:</strong>
          <span>{data.stats[1].base_stat}</span>
          <progress value={data.stats[1].base_stat} max="150" /> <br />
          <strong>Defense:</strong>
          <span>{data.stats[2].base_stat}</span>
          <progress value={data.stats[2].base_stat} max="150" /> <br />
          <strong>Sp-att:</strong>
          <span>{data.stats[3].base_stat}</span>
          <progress value={data.stats[3].base_stat} max="150" /> <br />
          <strong>Sp-def:</strong>
          <span>{data.stats[4].base_stat}</span>
          <progress value={data.stats[4].base_stat} max="150" /> <br />
          <strong>Speed:</strong>
          <span>{data.stats[5].base_stat}</span>
          <progress value={data.stats[5].base_stat} max="150" /> <br />
        </section>
      </main>
    </>
  );
}

export default Pokedex;
