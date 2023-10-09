import weaknesses from "../data/weakness";
import bug from "../img/Texturas/insect.png";
import dark from "../img/Texturas/dark.png";
import dragon from "../img/Texturas/dragon.png";
import electric from "../img/Texturas/Tazo_0012_ELECTRICO.png";
import fairy from "../img/Texturas/fairy.png";
import fighting from "../img/Texturas/fight.png";
import flying from "../img/Texturas/flying.png";
import fire from "../img/Texturas/Tazo_0014_FUEGO.png";
import ghost from "../img/Texturas/ghost.png";
import grass from "../img/Texturas/Tazo_0015_HIERBA.png";
import ground from "../img/Texturas/ground.png";
import ice from "../img/Texturas/ice.png";
import normal from "../img/Texturas/normal.png";
import poison from "../img/Texturas/poison.png";
import psychic from "../img/Texturas/psychic.png";
import rock from "../img/Texturas/rock.png";
import steel from "../img/Texturas/steel.png";
import water from "../img/Texturas/Tazo_0013_AGUA.png";
import pokeball from "../img/Poké_Ball_icon.svg.png";

type CardProps = {
  data: FullPokemonInfo;
};

type FullPokemonInfo = {
  abilities: object[];
  base_experience: number;
  forms: object[];
  game_indices: object[];
  height: number;
  held_items: [] | object[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: object[];
  name: string;
  order: number;
  past_types: [] | object[];
  species: object;
  sprites: {
    front_default: string;
    back_default: string;
  };
  stats: object[];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  weight: number;
};

type imageSources = {
  [index: string]: string;
};

function Card(props: CardProps) {
  let imageSources: imageSources = {
    bug: bug,
    dark: dark,
    dragon: dragon,
    electric: electric,
    fairy: fairy,
    fighting: fighting,
    fire: fire,
    flying: flying,
    ghost: ghost,
    grass: grass,
    normal: normal,
    none: "",
    psychic: psychic,
    ground: ground,
    ice: ice,
    poison: poison,
    rock: rock,
    steel: steel,
    water: water,
  };

  let type = props.data.types[0].type.name;
  let name: string = props.data.name;
  let rest = name.slice(1, name.length);
  let firstLetter = name[0].toUpperCase();
  name = firstLetter + rest;

  return (
    <figure className="flippo">
      <div className="flippo__flipper">
        <div className="flippo__face flippo__front">
          <img
            src={imageSources[type]}
            alt={`background for ${type} type`}
            width="150"
          />
          <img
            src={props.data.sprites.front_default}
            alt={`sprite of ${props.data.name}`}
            width="120"
            className="flippo__sprite"
          />
          <svg
            viewBox="0 -20 150 150"
            width="150"
            height="150"
            className="flippo__name">
            <defs>
              <path id="circle" d="m 0 25 a 3 3 20 0 0 96 -110" />
            </defs>
            <text fill="white" className="flippo__name__text">
              <textPath xlinkHref="#circle" className="flippo__name__text">
                #{props.data.id} {name}
              </textPath>
            </text>
          </svg>
        </div>
        <div className="flippo__face flippo__back">
          <div className={`flippo__type`}>
            <p className={`flippo__type__text flippo__${type}`}>
              {type.toUpperCase()}
            </p>
          </div>
          <img src={pokeball} alt="Pokeball back image" width="150" />
          <button className="flippo__favorite__displayed">🖤</button>
          {/* <button className="flippo__favorite">❤️</button> */}

          <div className="flippo__weaknesses">
            <p className="flippo__weaknessesText">Strong against</p>
            <div className="flippo__weaknesses__types">
              {weaknesses[type]?.map((t: string) => (
                <figure key={t} className="weakness__image__container">
                  <img
                    src={imageSources[t]}
                    width="18"
                    className={`weakness__image weakness__${t}`}
                  />
                  <span className="type__tooltip">{t}</span>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default Card;
